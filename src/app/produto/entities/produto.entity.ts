import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProdutoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  preco: number;

  @Column()
  quantidade_disponivel: number;
}
