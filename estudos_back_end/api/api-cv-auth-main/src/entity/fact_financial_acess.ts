import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'fato_financeiro_acesso' })
export class FactFinancialAcessEntity {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column({ name: 'nome' })
    name!: string;

  @Column({ name: 'data_criacao' })
    created_at!: Date;

  @Column({ name: 'data_criacao' })
    created_hour!: string;

  @Column({ name: 'data_inativacao' })
    deleted_at!: Date;

  @Column({ name: 'data_inativacao' })
    deleted_hour!: string;
}
