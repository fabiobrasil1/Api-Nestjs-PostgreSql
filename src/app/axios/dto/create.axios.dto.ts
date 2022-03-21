import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNumber, IsString } from 'class-validator'

export class CreateAxiosDto{
  @ApiProperty({example: '25', description:'identificador auto increment'})
  @IsNumber()
  id: number;

  @ApiProperty({example: '1', description: 'valor 1 gerado pela resposta da api'})
  @IsNumber()
  resposta: number



  @IsNumber()
  userId: number;

  @IsString()
  title: string;

  @IsBoolean()
  completed: boolean;
}