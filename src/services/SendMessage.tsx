export const CONTACT_URL = "php/contact.php"; // URL to PHP script

export function SendMessage(
  name: string,
  email: string,
  message: string,
  subject?: string,
  company?: string
): Promise<void> {
  const body = buildMessageBody(name, email, message, subject, company);

  return fetch(CONTACT_URL, {
    body,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    method: "POST"
  }).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
}

const buildMessageBody = (
  name: string,
  email: string,
  message: string,
  subject?: string,
  company?: string
): string => {
  if (!name || !email || !message) {
    throw new Error("Name, Email and Message are mandatory fields!");
  }

  const body = `name=${encodeURIComponent(name)}&email=${encodeURIComponent(
    email
  )}&subject=${subject ? encodeURIComponent(subject) : "NA"}&company=${
    company ? encodeURIComponent(company) : "NA"
  }&message=${encodeURIComponent(message)}`;

  return body;
};
