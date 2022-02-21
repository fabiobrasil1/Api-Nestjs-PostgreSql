import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authSevice: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiTags('produtos')
  async login(@Req() req: any) {
    return await this.authSevice.login(req.user);
  }
}
