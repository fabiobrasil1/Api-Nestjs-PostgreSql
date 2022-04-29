import { ApiProperty } from '@nestjs/swagger';
import { ProdutoEntity } from 'src/app/produto/entities/produto.entity';

export class ProdutoDto {
	@ApiProperty()
	length: number;

	@ApiProperty({ type: () => [ProdutoEntity] })
	data: ProdutoEntity[];
}
