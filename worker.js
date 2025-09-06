import { Resend } from 'resend';

async function validateTurnstileToken(token, secretKey, remoteIp) {
  const formData = new FormData();
  formData.append('secret', secretKey);
  formData.append('response', token);
  formData.append('remoteip', remoteIp);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  });

  const validation  = await response.json();
  
  if (!validation .success) {
    const errorCodes = validation ['error-codes'] || [];
    throw new Error(`Turnstile validation failed: ${errorCodes.join(', ')}`);
  }
  
  return validation ;
}

async function validateRequestDetails(body, headers, turnstileSecretKey) {
  const { name, email, message, captcha } = body;
  if (!name || !email || !message || !captcha) {
    throw new Error('Missing required fields: name, email, message, and captcha are required');
  }
  
  const clientIp = headers.get('CF-Connecting-IP') || headers.get('X-Forwarded-For') || 'unknown';
  
  await validateTurnstileToken(captcha, turnstileSecretKey, clientIp);
  
  return { name, email, message, subject: body.subject };
}

async function sendEmail(formData, contactEmail, resendApiKey) {
  const { name, email, message, subject } = formData;
  
  const resend = new Resend(resendApiKey);
  
  const emailData = {
    from: "contact@ricardomarques.dev",
    to: contactEmail,
    subject: subject || `Contact form submission from ${name}`,
    html: `<p>Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'No subject'}\n\nMessage:\n${message}</p>`,
    reply_to: email
  };

  const result = await resend.emails.send(emailData);
  
  if (result.error) {
    throw new Error(`Failed to send email: ${JSON.stringify(result.error)}`);
  }
  
  return result;
}

async function handleContactForm(request, env) {  
  const body = await request.json();
  
  const formData = await validateRequestDetails(body, request.headers, env.TURNSTILE_SECRET_KEY);
  
  await sendEmail(formData, env.CONTACT_EMAIL, env.RESEND_API_KEY);
  console.log('Email sent successfully');
  
  return new Response(JSON.stringify({
    success: true,
    message: 'Your message has been sent successfully!'
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/api/contact' && request.method === 'POST') {
      try {
        return await handleContactForm(request, env);
      } catch (error) {
        console.error(error);
        
        const statusCode = error instanceof SyntaxError ? 400 : 500;
        return new Response(JSON.stringify({
          success: false,
          error: 'An error occurred...'
        }), {
          status: statusCode,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    return env.ASSETS.fetch(request);
  }
};
