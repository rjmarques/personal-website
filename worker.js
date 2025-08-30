import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from 'mimetext/browser'

function validateRequestDetails(body) {
  const { name, email, message } = body;
  if (!name || !email || !message) {
    throw new Error('Missing required fields: name, email, and message are required');
  }
  return { name, email, message, subject: body.subject };
}

function createEmailMessage(formData, contactEmail) {
  const { name, email, message, subject } = formData;
  
  const msg = createMimeMessage();
  msg.setSender({ name: name, addr: email });
  msg.setRecipient(contactEmail);
  msg.setSubject(subject || `Contact form submission from ${name}`);
  msg.addMessage({
    contentType: "text/plain",
    data: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'No subject'}\n\nMessage:\n${message}`,
  });

  return new EmailMessage(email, contactEmail, msg.asRaw());
}

async function handleContactForm(request, env) {  
  const body = await request.json();
  console.log('Received contact form submission:', body);
  
  const formData = validateRequestDetails(body);
  console.log("env object: ${env}");
  const emailMessage = createEmailMessage(formData, env.CONTACT_EMAIL);
  
  await env.EMAIL.send(emailMessage);
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
        console.error('Error processing contact form:', error);
        
        const statusCode = error instanceof SyntaxError ? 400 : 500;
        return new Response(JSON.stringify({
          success: false,
          error: error.message || 'An error occurred'
        }), {
          status: statusCode,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    return env.ASSETS.fetch(request);
  }
};
