import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UploadFileEntity {
  @PrimaryGeneratedColumn()
  fileid: number;

  @Column({nullable: true})
  descricao!:string;
  
  @Column()
  fileEncoded:string;
}
