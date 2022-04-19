import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUploadFileDto } from '../dto/create-upload-file.dto';
import { UploadFileEntity } from '../entities/upload-file.entity';

@Injectable()
export class UploadFileRepoService {

	constructor(
		@InjectRepository(UploadFileEntity)
		private uploadFileRepository: Repository<UploadFileEntity>,

	) { }

	async docImage(fileEncoded: string, createUploadFileDto: CreateUploadFileDto): Promise<UploadFileEntity> {
		try{

		
	

		let document = await this.uploadFileRepository.save({ fileEncoded: fileEncoded,descricao: createUploadFileDto.descricao })
		
		return document;
		}
		catch{
			throw new InternalServerErrorException()
		}
	}
}