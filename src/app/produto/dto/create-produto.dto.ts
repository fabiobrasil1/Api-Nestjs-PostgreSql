
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString,IsNotEmpty } from 'class-validator';


export class CreateProdutoDto {
    @ApiProperty({ example: '1', description:'Identificador do produto' })
    @IsNumber()
    id:number;
    
    @ApiProperty({ example: 'Coca-cola', description:'Nome do produto' })
    @IsString()
    @IsNotEmpty()
    nome: string;
    
    @ApiProperty({ example: 'Refrigerante de cola', description:'Descrição do produto' })
    @IsString()
    descricao: string;
    
    @ApiProperty({ example: '35', description:'Preço do produto' })
    @IsNumber()
    preco: number;
    
    @ApiProperty({ example: '15', description:'Quantidade de itens disponíveis'})
    @IsNumber()
    quantidade_disponivel: number;
}
