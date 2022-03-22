
import { Controller, Post, Get} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AxiosService } from './axios.service';


@Controller('axios')
export class AxiosController {
  constructor(private readonly axiosService: AxiosService){}

  @Get('getapifindAll')
  @ApiTags('getapifindAll')
  async findAll() {
     return this.axiosService.findAll();
  }

  @Post('salvarequisicao')
  @ApiTags('salvarequisicao')
  async postapi() {
    return await this.axiosService.salvaRequisicao();
  }
}
