import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UploadFileEntity {
  @PrimaryGeneratedColumn()
  fileid: number;
  
  @Column()
  fileEncoded:string;
}
