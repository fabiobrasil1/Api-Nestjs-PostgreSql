
import { Controller, Post, Get} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AxiosService } from './axios.service';


@Controller('axios')
export class AxiosController {
  constructor(private readonly axiosService: AxiosService){}


  @Post('postapi')
  @ApiTags('postapi')
  async postapi() {
    return await this.axiosService.salvaExemplo();
  }

  // @Get('getapi')
  // @ApiTags('getapi')
  // async findAll2() {
  //    return  await this.axiosService.getAllAxios();
  // }
  @Get('getapifindAll')
  @ApiTags('getapifindAll')
  async findAll() {
     return this.axiosService.findAll();
  }
}
