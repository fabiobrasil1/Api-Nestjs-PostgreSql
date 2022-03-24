import { AxiosService } from './axios.service';
import { AxiosController } from './axios.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Axios } from './entities/axios.entity';
import { HttpModule } from '@nestjs/axios';
import { Repository } from 'typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Axios]),HttpModule],
    controllers: [AxiosController,],
    providers: [AxiosService,Repository],

})
export class AxiosModule { }
