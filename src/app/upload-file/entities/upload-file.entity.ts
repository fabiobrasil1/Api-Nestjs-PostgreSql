import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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
