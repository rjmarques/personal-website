import express, { Request, Response } from "express";
import { ValidateRecaptcha } from "./recaptcha";
import mailto from "./mailto";

const app = express();

app.use(express.json());

interface ContactRequest {
  name: string;
  email: string;
  message: string;
  captcha: string;
  subject?: string;
  company?: string;
}

app.post("/api/contact", async (req: Request, res: Response) => {
  try {
    const contactReq: ContactRequest = req.body;

    if (!contactReq.name) {
      throw new Error("missing field 'name'");
    }
    if (!contactReq.email) {
      throw new Error("missing field 'email'");
    }
    if (!contactReq.message) {
      throw new Error("missing field 'message'");
    }
    if (!contactReq.captcha) {
      throw new Error("missing field 'captcha'");
    }

    const captcha = await ValidateRecaptcha(contactReq.captcha);
    if (!captcha.success) {
      throw new Error("invalid recaptcha, please try again");
    }

    await mailto(
      contactReq.name,
      contactReq.email,
      contactReq.message,
      contactReq.subject,
      contactReq.company
    );

    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    res.status(400).send(`Invalid request: ${error}`);
  }
});

app.listen(8000, () => {
  console.log("Server Started at Port, 8000");
});
