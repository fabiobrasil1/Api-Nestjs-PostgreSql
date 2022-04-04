import { SendMailService } from './app/sendEmail/sendmail.service';
import { SendMailController } from './app/sendEmail/sendmail.controller';
import { AxiosModule } from './app/axios/axios.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './app/produto/produto.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './app/users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AxiosModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],

      // Descomentar somente em ambiente de desenvolvimento
      synchronize: true,
    } as TypeOrmModuleOptions),
    UsersModule,
    ProdutoModule,
    AuthModule,
  ],
  controllers: [
    SendMailController, AppController],
  providers: [
    SendMailService, AppService],
})
export class AppModule { }
