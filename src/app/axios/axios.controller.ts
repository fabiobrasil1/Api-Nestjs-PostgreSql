import { Controller, Post, Get} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AxiosService } from './axios.service';

@Controller('axios')
export class AxiosController {
  constructor(private readonly axiosService: AxiosService){}

  @Get('getapifindAll')
  @ApiTags('getapifindAll')
  async findAll() {
    return await this.axiosService.findAll();
  }

  @Post('salvaResposta')
  @ApiTags('salvaExemplo')
  async salvaResposta() {
    return await this.axiosService.salvaResposta();
  }

  @Post('axiosParams')
  async axiosParams(){
    return this.axiosService.axiosParams();
  } 
}
