import { PartialType } from '@nestjs/swagger';
import { CreteAxiosDto } from './create.axios.dto';

export class UpdateAxiosDto extends PartialType(CreteAxiosDto) {}