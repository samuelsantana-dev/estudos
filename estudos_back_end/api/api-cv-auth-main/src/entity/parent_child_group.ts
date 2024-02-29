import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'grupo_pai_filho' })
export class ParentChildGroupEntity {
  @PrimaryColumn()
    id!: number;

  @Column({ name: 'data_criacao' })
    created_at!: Date;

  @Column({ name: 'hora_criacao' })
    hour_created!: Date;

  @Column({ name: 'pai_id' })
    father_id!: number;

  @Column({ name: 'filho_id' })
    child_id!: number;

  @Column({ name: 'data_inativacao' })
    deleted_at!: Date;

  @Column({ name: 'hora_inativacao' })
    deleted_hour!: Date;
}
