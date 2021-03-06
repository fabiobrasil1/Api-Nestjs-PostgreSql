import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiCreatedResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

import { ProdutoEntity } from './entities/produto.entity';
import { type } from 'os';
import { number } from 'yargs';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ProdutoDto } from './dto/produto.dto';
import { FiltroPaginacaoProdutosDTO } from './dto/filtro-produto.dto';

@Controller('produto')
//@UseGuards(AuthGuard('jwt'))
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post('novoproduto')
  @ApiTags('novoproduto')
  @ApiBody({ type: CreateProdutoDto })
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    return await this.produtoService.criaProduto(createProdutoDto);
  }

  @Get('listatodos')
  @ApiTags('getapi')
  async listaTodos() {
     return  await this.produtoService.listaTodos();
  }

  @Get('paginacao')
  @ApiTags('produtos')
  @ApiCreatedResponse({
    description: 'Ok.',
    type: ProdutoDto,
  })
  async findAllByProdutoId(
    @Query() query: FiltroPaginacaoProdutosDTO,
  ): Promise<ProdutoDto> {
    if (!query.page) {
      query.page = 1;
    }
    if (!query.limit) {
      query.limit = 20;
    }

    return await this.produtoService.findAllByProdutoId(query);
  }

  @Get('paginationlib')
  @ApiTags('produtos')
  @ApiQuery({ name: 'page', required: false, type: number })
  @ApiQuery({ name: 'limit', required: false, type: number })
  async Index(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<Pagination<ProdutoEntity>> {
    limit = limit > 10 ? 10 : limit;

    return await this.produtoService.litstaTodosPaginacao({ page, limit });
  }

  @Get('listaum/:id')
  @ApiTags('produtos')
  findOne(@Param('id') id: string) {
    return this.produtoService.listaUm(+id);
  }
  
  @Get('quantidadedisponivel/:nome')
  @ApiTags('produtos')
  async getQuantidadadeDisponivel(@Param('nome') params: string) {
    return await this.produtoService.quantidadeDisponivel(params);
  }

  @Patch('atualizaproduto/:id')
  @ApiTags('produtos')
  @ApiBody({ type: UpdateProdutoDto })
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.atualizaProduto(+id, updateProdutoDto);
  }

  @Delete('removeproduto/:id')
  @ApiTags('produtos')
  remove(@Param('id') id: string) {
    return this.produtoService.removeProduto(+id);
  }
}
