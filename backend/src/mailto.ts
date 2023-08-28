import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

const contactEmail = process.env.CONTACT_EMAIL;

const transporter = nodemailer.createTransport({
  name:"www.ricardomarques.dev",
  pool: true,
  host: smtpHost,
  port: 465,
  secure: true,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is ready to take our messages: ${success}`);
  }
});

export default async (
  name: string,
  sender: string,
  msg: string,
  subject?: string,
  company?: string
): Promise<string> => {
  const info = await transporter.sendMail({
    from: `${name} - ${company || "N/A"} <${sender}>`,
    to: contactEmail,
    subject,
    html: msg,
  });

  return info;
};
