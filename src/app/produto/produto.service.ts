import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>

  ) { }

  create(createProdutoDto: CreateProdutoDto): Promise <Produto> {
    const produto = this.produtoRepository.create(createProdutoDto)
    return this.produtoRepository.save(produto)
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

  async update(id: number, updateProdutoDto: UpdateProdutoDto): Promise <Produto> {
    const produto = await this.produtoRepository.preload({
      id: id,
      ...updateProdutoDto
    });
    if(!produto){
      throw new NotFoundException(`Produto ${id} não econtrado, verifique o id digitado e tente novamente!`) 

    }
   
    return this.produtoRepository.save(produto);
  }

  async remove(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
  
  
  
  // remove(id: number) {
  //   return `This action removes a #${id} produto`;
  // }
}
