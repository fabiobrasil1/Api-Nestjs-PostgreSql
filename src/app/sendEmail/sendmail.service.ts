/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class SendMailService {

  enviaEmail() {
    const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport({
      host: "smtp.live.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SEND_EMAIL_USER,
        pass: process.env.SEND_EMAIL_PASS
      }
    });
    
    transporter.sendEmail({
      from: "Fabio Brasil <fabiobfelix@hotmail.com>",
      to: "fabiobfelix6@gmail.com.br",
      subject: "oi, eu so o Fabio",
      text: "olá esse e o texto do email",
      html: "<h2>teste de texto no formato html</h2>",
    }).then(message => {
      console.log(message);
    }).cath(err => {
      console.log(err);
    })
  }
}
