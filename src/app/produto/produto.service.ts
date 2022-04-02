import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getRepository, createConnection } from 'typeorm';
import { Produto } from './entities/produto.entity';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { MessagesHelper } from 'src/helpers/messages.helper';

@Injectable()
export class ProdutoService {
  constructor(
    //injecao de dependncia
    //instanciando entidade Produto
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) { }

  criaProduto(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    const produto = this.produtoRepository.create(createProdutoDto);
    return this.produtoRepository.save(produto);
  }

  listaTodos(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async litstaTodosPaginacao(options: IPaginationOptions): Promise<Pagination<Produto>> {
    const queryBuilder = this.produtoRepository.createQueryBuilder('produto');

    queryBuilder.select([
      'produto.id',
      'produto.nome',
      'produto.descricao',
      'produto.preco',
      'produto.quantidade_disponivel',
    ]);

    queryBuilder.orderBy('produto.id', 'ASC');

    return paginate<Produto>(queryBuilder, options);
  }

  listaUm(id: number): Promise<Produto> {
    const produto = this.produtoRepository.findOne(id)
    if (!produto) {
      throw new HttpException(
        `produto ${id} não encontrado, veritique o id digitado e tente novamente!`,
        HttpStatus.NOT_FOUND
      )
    }
    return produto;
  }

  async atualizaProduto(
    id: number,
    updateProdutoDto: UpdateProdutoDto,
  ): Promise<UpdateProdutoDto> {
    const produto = await this.produtoRepository.preload({
      id: id,
      ...updateProdutoDto,
    });
    if (!produto) {
      throw new HttpException(
        `Produto ${id} não econtrado, verifique o id digitado e tente novamente!`,
        HttpStatus.NOT_FOUND
      );
    }

    return this.produtoRepository.save(produto);
  }

  async removeProduto(id: number): Promise<void> {
    const produto = await this.produtoRepository.delete(id);
    if (!produto) {
      throw new HttpException(
        `Produto ${id} não econtrado, verifique o id digitado e tente novamente!`,
        HttpStatus.NOT_FOUND
      );
    }
  }

  async quantidadeDisponivel(nome: string) {
    const produto = await this.produtoRepository.find({
      where: { nome: nome },
    });

    return { data: { quantidade: produto.length } };
  }
}
