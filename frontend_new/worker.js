export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle POST requests to /api/contact
    if (path === '/api/contact' && request.method === 'POST') {
      try {
        const body = await request.json();
        console.log('Received contact form submission:', body);
        
        return new Response(JSON.stringify({
          success: true,
          message: 'Hello World! Received your message: ' + JSON.stringify(body)
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (error) {
        return new Response(JSON.stringify({
          success: false,
          error: 'Invalid JSON in request body'
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Serve static content
    return env.ASSETS.fetch(request);
  }
};
