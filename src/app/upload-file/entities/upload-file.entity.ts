import { Column, PrimaryGeneratedColumn } from 'typeorm';


export class UploadFile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column()
  fileName: string;
}
