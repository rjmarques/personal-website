import sendmail from "sendmail";

const contactEmail = process.env.CONTACT_EMAIL;

const sendMailFn = sendmail({});

export default async (
  name: string,
  sender: string,
  msg: string,
  subject?: string,
  company?: string
): Promise<string> => {
  const from = `${name} - ${company || "N/A"} <${sender}>`;

  return new Promise<string>((resolve, reject) => {
    sendMailFn(
      {
        from,
        to: contactEmail,
        subject,
        html: msg,
      },
      (err, reply) => {
        if (err) {
          reject(err.message);
          return;
        }
        resolve(reply);
      }
    );
  });
};
