/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class SendMailService {
  async enviaEmail() {
    const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport({
      host: process.env.SEND_EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SEND_EMAIL_USER,
        pass: process.env.SEND_EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false,
      }
    });

    await transporter.sendMail({
      from: "Fabio Brasil <fabiobfelix6@gmail.com>",
      to: ['fabiobfelix@hotmail.com.br'],
      subject: "teste Assunto do email",
      text: "olá esse e o texto do e-mail",
      // html: "<h2>teste de texto no formato html</h2>",
    }).then(message => {
      console.log(message);
    }).cath(err => {
      console.log(err);
    })
  }
} 