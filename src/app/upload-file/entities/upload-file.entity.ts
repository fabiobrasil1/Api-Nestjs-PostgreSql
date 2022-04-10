import { Column, PrimaryGeneratedColumn } from 'typeorm';


export class UploadFileEntity {
  @PrimaryGeneratedColumn()
  fileid: number;

  @Column()
  descricao: string;

  @Column()
  fileName: string;

  @Column()
  fileEncoded:string;
}
