import { PartialType } from '@nestjs/swagger';
import { CreateAxiosDto } from './create.axios.dto';

export class UpdateAxiosDto extends PartialType(CreateAxiosDto) {}