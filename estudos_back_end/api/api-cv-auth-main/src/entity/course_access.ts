import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'curso_acesso' })
export class CourseAccessEntity {
  @PrimaryColumn()
    id!: number;

  @Column({ name: 'nome' })
    name!: string;

  @Column({ name: 'data_criacao' })
    created_at!: Date;

  @Column({ name: 'hora_criacao' })
    hour_created!: Date;

  @Column({ name: 'data_inativacao' })
    deleted_at!: Date;

  @Column({ name: 'hora_inativacao' })
    deleted_hour!: Date;
}
