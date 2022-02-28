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
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';

import { Produto } from './entities/produto.entity';
import { type } from 'os';
import { number } from 'yargs';
import { Pagination } from 'nestjs-typeorm-paginate';

@Controller('produto')
//@UseGuards(AuthGuard('jwt'))
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @ApiTags('produtos')
  @ApiBody({ type: CreateProdutoDto })
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    return await this.produtoService.create(createProdutoDto);
  }

  // @Get()
  // @ApiTags('produtos')
  // findAll() {
  //   return this.produtoService.findAll();
  // }

  @Get()
  @ApiTags('produtos')
  @ApiQuery({ name: 'page', required: false, type: number })
  @ApiQuery({ name: 'limit', required: false, type: number })
  async Index(
    @Query('page') page = 1,
    @Query('limit') limit = 100,
  ): Promise<Pagination<Produto>> {
    limit = limit > 100 ? 100 : limit;

    return await this.produtoService.findAll({ page, limit });
  }

  @Get(':id')
  @ApiTags('produtos')
  findOne(@Param('id') id: string) {
    return this.produtoService.findOne(+id);
  }
  @Get('disponivel/:nome')
  @ApiTags('produtos')
  async getQuantidadadeDisponivel(@Param('nome') params: string) {
    return await this.produtoService.quantidadeDisponivel(params);
  }

  @Patch(':id')
  @ApiTags('produtos')
  @ApiBody({ type: UpdateProdutoDto })
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(+id, updateProdutoDto);
  }

  @Delete(':id')
  @ApiTags('produtos')
  remove(@Param('id') id: string) {
    return this.produtoService.remove(+id);
  }
}
