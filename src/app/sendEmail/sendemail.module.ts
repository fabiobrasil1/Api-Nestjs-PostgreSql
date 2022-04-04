import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { SendMailService } from './sendmail.service'
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRoot({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      transport: {
        host: 'https://outlook.live.com/',
        secure: false,
        auth: {
          user: 'fabiobfelix@hotmail.com',
          pass: 'senha',
        },
      },
      defaults: {
        from: '"No Reply" <fabiobfelix@hotmail.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [SendMailService],
  exports: [SendMailService], // 👈 export for DI
})
export class MailModule {}
