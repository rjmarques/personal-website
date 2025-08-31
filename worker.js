import { Resend } from 'resend';

function validateRequestDetails(body) {
  const { name, email, message, captcha } = body;
  if (!name || !email || !message || !captcha) {
    throw new Error('Missing required fields: name, email, and message are required');
  }
  // TODO: Add captcha validation
  return { name, email, message, subject: body.subject };
}

async function sendEmail(formData, contactEmail, resendApiKey) {
  const { name, email, message, subject } = formData;
  
  const resend = new Resend(resendApiKey);
  
  const emailData = {
    from: "contact@ricardomarques.dev",
    to: contactEmail,
    subject: subject || `Contact form submission from ${name}`,
    html: `<strong>Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'No subject'}\n\nMessage:\n${message}</strong>`,
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
  console.log('Received contact form submission:', body);
  
  const formData = validateRequestDetails(body);
  
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
