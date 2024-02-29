/* eslint-disable indent */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'permissao' })
export class PermissionEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'nome' })
  name!: string;

  @Column({ name: 'descricao' })
  description!: string;

  @CreateDateColumn({ name: 'data_criacao' })
  created_date_at!: Date;

  @Column({ name: 'hora_criacao' })
  created_hour_at!: Date;

  @Column({ name: 'data_inativacao' })
  inactivated_date_at!: Date;

  @Column({ name: 'hora_inativacao' })
  inactivated_hour_at!: string;
}
