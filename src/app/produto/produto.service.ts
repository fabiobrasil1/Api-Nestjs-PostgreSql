import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getRepository, createConnection } from 'typeorm';
import { ProdutoEntity } from './entities/produto.entity';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { MessagesHelper } from 'src/helpers/messages.helper';
import { FiltroPaginacaoProdutosDTO } from './dto/filtro-produto.dto';
import { ProdutoDto } from './dto/produto.dto';
import { ProdutoRepoService } from './repositories/produto-repo.service';
import

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoEntity)
    private produtoRepository: Repository<ProdutoEntity>,
    private produtoRepoService: ProdutoRepoService
  ) { }

  findAllByProdutoId(
		query: FiltroPaginacaoProdutosDTO,
	): Promise<ProdutoDto> {
		return this.produtoRepoService.findAllByCompanyId(query);
	}

  criaProduto(createProdutoDto: CreateProdutoDto): Promise<ProdutoEntity> {
    const produto = this.produtoRepository.create(createProdutoDto);
    return this.produtoRepository.save(produto);
  }

  listaTodos(): Promise<ProdutoEntity[]> {
    return this.produtoRepository.find();
  }

  async litstaTodosPaginacao(options: IPaginationOptions): Promise<Pagination<ProdutoEntity>> {
    const queryBuilder = this.produtoRepository.createQueryBuilder('produto');

    queryBuilder.select([
      'produto.id',
      'produto.nome',
      'produto.descricao',
      'produto.preco',
      'produto.quantidade_disponivel',
    ]);

    queryBuilder.orderBy('produto.id', 'ASC');

    return paginate<ProdutoEntity>(queryBuilder, options);
  }

  listaUm(id: number): Promise<ProdutoEntity> {
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
