import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateProdutoDto {
  @ApiProperty({ 
    example: 'Coca-cola', 
    description: 'Nome do produto' 
  })
  @IsString({message: 'A propriedade "nome" precisa ser do tipo string'})
  @IsNotEmpty({message: 'A propriedade "nome" é obrigatória'})
  nome: string;

  @ApiProperty({
    example: 'Refrigerante de cola',
    description: 'Descrição do produto',
  })
  @IsString({message: 'A propriedade "descricao" precisa ser do tipo string'})
  @IsNotEmpty({message: 'A propriedade "descricao" é obrigatória'})
  descricao: string;

  @ApiProperty({ 
    example: '35', 
    description: 'Preço do produto' 
  })
  @IsNumber({},{message: 'A propriedade "preco" precisa ser do tipo number'})
  @IsNotEmpty({message: 'A propriedade "preco" é obrigatória'})
  preco: number;

  @ApiProperty({
    example: '15',
    description: 'Quantidade de itens disponíveis',
  })
  @IsNumber({},{message: 'A propriedade "quantidade_disponivel" precisa ser do tipo number'})
  @IsNotEmpty({message: 'A propriedade "quantidade_disponivel" é obrigatória'})
  quantidade_disponivel: number;
}
