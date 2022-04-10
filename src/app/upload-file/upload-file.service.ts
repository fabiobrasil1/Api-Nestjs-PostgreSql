import { Injectable } from '@nestjs/common';
import { CreateUploadFileDto } from './dto/create-upload-file.dto';
import { UpdateUploadFileDto } from './dto/update-upload-file.dto';
import { UploadFileRepoService } from './repositories/uploadfile.repo-service';

@Injectable()
export class UploadFileService {
  constructor(private uploadFileRepoService: UploadFileRepoService){ }


  async uploadDocImage(file: Express.Multer.File, userId: number): Promise<void> {
		const encoded = file.buffer.toString('base64');
		const fileName = file.originalname
		await this.uploadFileRepoService.docImage(encoded, userId, fileName)
	}
  
  
  create(createUploadFileDto: CreateUploadFileDto) {
    return 'This action adds a new uploadFile';
  }

  findAll() {
    return `This action returns all uploadFile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uploadFile`;
  }

  update(id: number, updateUploadFileDto: UpdateUploadFileDto) {
    return `This action updates a #${id} uploadFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} uploadFile`;
  }
}
