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

	async docImage(fileEncoded: string, fileId: number, fileName: string): Promise<UploadFileEntity> {
		const findFile = await this.uploadFileRepository.findOne({ where: { fileId: fileId } })

		// try{
		let document = await this.uploadFileRepository.save({ fileName: fileName, fileEncoded: fileEncoded })
		// .createQueryBuilder()
		// .insert()
		// .into('userdocument')
		// .values({
		// 	docUser64: fileEncoded,
		// 	userId: userId,
		// 	fileName: fileName
		// })
		// .execute();
		return document;
		// }
		// catch{
		// 	throw new InternalServerErrorException("Erro ao salvar a imagem, este usuário já possui um documento associado")
		// }

	}
}