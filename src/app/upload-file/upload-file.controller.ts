import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UploadFileService } from './upload-file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'
import { CreateUploadFileDto } from './dto/create-upload-file.dto';

@Controller('upload-file')
export class UploadFileController {
  constructor(private readonly uploadFileService: UploadFileService) {}

  @Post('documents/upload')
	@UseInterceptors(FileInterceptor('file'))
	uploadFile(@UploadedFile() file: Express.Multer.File, createUploadFileDto: CreateUploadFileDto){
		return this.uploadFileService.uploadDocImage(file, createUploadFileDto);
  }
}
