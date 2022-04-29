import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FiltroPaginacaoProdutosDTO } from '../dto/filtro-produto.dto';
import { ProdutoDto } from '../dto/produto.dto';
import { ProdutoEntity } from '../entities/produto.entity';

@Injectable()
export class ProdutoRepoService {

  constructor(
    @InjectRepository(ProdutoEntity)
    private produtoRepository: Repository<ProdutoEntity>,
  ) { }

  async findAllByCompanyId(
    query: FiltroPaginacaoProdutosDTO,
  ): Promise<ProdutoDto> {
    let queryBuilderSelect = this.produtoRepository
      .createQueryBuilder('produto')
      .where('produto.nome :nome', { nome: query.nome })

    if (query.nome) {
      queryBuilderSelect.andWhere(
        'LOWER(produtos.name) like LOWER(:query1)', { query1: `%${query.nome}%` },
      );
    }
    if (query.descricao) {
      queryBuilderSelect.andWhere(
        'LOWER(drivers.descricao) like LOWER(:query2)',
        { query2: `%${query.descricao}%` },
      );
    }
    if (query.preco) {
      queryBuilderSelect.andWhere(
        'LOWER(drivers.preco) like LOWER(:query3)',
        { query3: `%${query.preco}%` },
      );
    }
    if (query.quantidade_disponivel) {
      queryBuilderSelect.andWhere('LOWER(drivers.quantidade_disponivel) like LOWER(:query4)',
        { query4: `%${query.quantidade_disponivel}%` },
      );
    }

    // if (query.page === 0) {
    //   query.page = 1;
    // }

    let count = await queryBuilderSelect.getCount();

    let produtos = await queryBuilderSelect
      .take(query.limit)
      .skip((query.page - 1) * query.limit)
      .orderBy('produtos.id', 'ASC')
      .getMany();

    if (!produtos) {
      throw new BadRequestException(`Não localizado`);
    }

    let result = new ProdutoDto();
    result.length = count;
    result.data = produtos;

    return result;
  }
}