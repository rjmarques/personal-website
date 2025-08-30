export const CONTACT_URL = "api/contact";

export default async function (
  name: string,
  email: string,
  message: string,
  captcha: string,
  subject?: string,
  company?: string
) {
  if (!name || !email || !message || !captcha) {
    throw new Error("Name, Email, Message and Captcha are mandatory fields!");
  }

  const body = JSON.stringify({
    name,
    email,
    message,
    subject,
    company,
    captcha,
  });

  const response = await fetch(CONTACT_URL, {
    body,
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    throw Error(response.statusText);
  }
}

