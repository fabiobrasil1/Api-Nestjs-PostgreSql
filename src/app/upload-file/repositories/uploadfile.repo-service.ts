import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UploadFileEntity } from '../entities/upload-file.entity';

@Injectable()
export class UploadFileRepoService {

	constructor(
		@InjectRepository(UploadFileEntity)
		private uploadFileRepository: Repository<UploadFileEntity>,

	) { }

	async docImage(fileEncoded: string): Promise<UploadFileEntity> {
		try{
		let document = await this.uploadFileRepository.save({ fileEncoded: fileEncoded })
		
		return document;
		}
		catch{
			throw new InternalServerErrorException("Erro ao salvar a imagem, este usuário já possui um documento associado")
		}
	}
}