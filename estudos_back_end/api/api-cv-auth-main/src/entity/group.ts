import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'grupo' })
export class GroupEntity {
  @PrimaryGeneratedColumn()
    id!: number;

  @CreateDateColumn({ name: 'data_criacao' })
    created_date_at!: Date;

  @Column({ name: 'hora_criacao' })
    created_hour_at!: string;

  @Column({ name: 'data_inativacao' })
    inactivated_date_at!: Date;

  @Column({ name: 'hora_inativacao' })
    inactivated_hour_at!: string;
}
