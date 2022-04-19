import { Injectable } from '@nestjs/common';
import { CreateUploadFileDto } from './dto/create-upload-file.dto';
import { UpdateUploadFileDto } from './dto/update-upload-file.dto';
import { UploadFileRepoService } from './repositories/uploadfile.repo-service';

@Injectable()
export class UploadFileService {
  constructor(private uploadFileRepoService: UploadFileRepoService) { }

  async uploadDocImage(file: Express.Multer.File, createUploadFileDto: CreateUploadFileDto): Promise<void> {
    const encoded = file.buffer.toString('base64');

    await this.uploadFileRepoService.docImage(encoded,createUploadFileDto)
  }
}
