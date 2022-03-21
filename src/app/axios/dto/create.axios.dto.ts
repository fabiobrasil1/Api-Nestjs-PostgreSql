import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString, IsNotEmpty } from 'class-validator'

export class CreteAxiosDto{
  @ApiProperty({example: '25', description:'identificador auto increment'})
  @IsNumber()
  id: number;

  @ApiProperty({example: '1', description: 'valor 1 gerado pela resposta da api'})
  @IsNumber()
  resposta: number

}