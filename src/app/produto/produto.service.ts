import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>

  ) { }

  
  create(createProdutoDto: CreateProdutoDto) {
    const produto = this.produtoRepository.create()
    return produto
  }

  findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  // findAll() {
  //   return `This action returns all produto`;
  }

  findOne(id: number): Promise<Produto> {
    return this.produtoRepository.findOne(id);
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} produto`;
  // }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  async remove(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
  
  
  
  // remove(id: number) {
  //   return `This action removes a #${id} produto`;
  // }
}
