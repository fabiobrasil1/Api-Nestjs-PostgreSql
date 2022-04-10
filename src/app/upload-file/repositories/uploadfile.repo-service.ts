import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class UploadFileRepoService {
  async docImage(fileEncoded: string, userId: number, fileName: string): Promise<boolean> {
		const findUser = await this.findUserById(userId);
		if(findUser){
			try{
				await this.userDocRepository
					.createQueryBuilder()
					.insert()
					.into('userdocument')
					.values({
						docUser64: fileEncoded,
						userId: userId,
						fileName: fileName
					})
					.execute();
				return true;
			}
			catch{
				throw new InternalServerErrorException("Erro ao salvar a imagem, este usuário já possui um documento associado")
			}
		}
}
