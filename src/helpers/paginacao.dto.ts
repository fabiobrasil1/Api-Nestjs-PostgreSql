import { ApiProperty } from '@nestjs/swagger';

export class PageDTO {
  @ApiProperty({default: 1, required: false})
  page: number 

  @ApiProperty({default: 10, required: false})
  limit: number 
}