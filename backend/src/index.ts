import path from "path";
import fs from "fs";

import React from "react";
import express, { Request, Response } from "express";
import ReactDOMServer from "react-dom/server";
import ValidateRecaptcha from "@rjmarques/recaptcha-validator";

import App from "../../frontend/src/components/App";
import mailto from "./mailto";

const PORT = process.env.PORT || 80;
const STATIC = process.env.STATIC || "./build";

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

app.get("/", (req, res) => {
  const rendered = ReactDOMServer.renderToString(React.createElement(App));
  const indexFile = path.resolve(`${STATIC}/index.html`);
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res
        .status(500)
        .send("Something went wrong, please try again later");
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`)
    );
  });
});

app.use(express.static(STATIC));

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

app.listen(PORT, () => {
  console.log(`Static folder being used: ${STATIC}`);
  console.log(`Server Started at Port, ${PORT}`);
});
