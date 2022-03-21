import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Axios {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  resposta: number;
}