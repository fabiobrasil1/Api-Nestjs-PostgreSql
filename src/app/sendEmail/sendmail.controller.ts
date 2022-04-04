/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SendMailService } from './sendmail.service';

@Controller()
export class SendMailController {

  constructor(private readonly sendEmail: SendMailService) {}

  @Post('sendemail')
  @ApiTags('sendEmail')
  async postapi() {
    return await this.sendEmail.enviaEmail();
  }
}
