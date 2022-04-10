import { Module } from '@nestjs/common';
import { UploadFileService } from './upload-file.service';
import { UploadFileController } from './upload-file.controller';
import { UploadFileRepoService } from './repositories/uploadfile.repo-service';
import { UploadFileEntity } from './entities/upload-file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UploadFileEntity])],
  controllers: [UploadFileController],
  providers: [UploadFileService,UploadFileRepoService]
})
export class UploadFileModule {}
