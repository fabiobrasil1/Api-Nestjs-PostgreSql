import { ApiProperty, PartialType } from '@nestjs/swagger';
import { PaginacaoDTO } from 'src/helpers/paginacao.dto';

export class FiltroPaginacaoProdutosDTO extends PartialType(PaginacaoDTO) {
  @ApiProperty({ required: false })
  nome: string;

  @ApiProperty({ required: false })
  descricao: string;

  @ApiProperty({ required: false })
  preco: string;
  
  @ApiProperty({ required: false })
  quantidade_disponivel: number;
}