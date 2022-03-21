import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Axios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  title: string;

  @Column()
  completed: boolean;
}