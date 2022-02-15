import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;
  
  @Column()
  preco: number;
  
  @Column()
  quantidade_disponível: number;


  @Column({ default: true })
  isActive: boolean;
}
