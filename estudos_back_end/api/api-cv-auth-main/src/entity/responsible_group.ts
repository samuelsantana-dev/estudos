import {
  ManyToOne, JoinColumn, Entity, Column, PrimaryColumn,
} from 'typeorm';
import { PeopleEntity } from './people';

@Entity({ name: 'grupo_responsavel' })
export class ResponsibleGroupEntity {
  @PrimaryColumn()
    id!: number;

  @Column({ name: 'data_criacao' })
    created_at!: Date;

  @Column({ name: 'hora_criacao' })
    hour_created!: Date;

  @ManyToOne(() => PeopleEntity, (people) => people.id)
  @JoinColumn({ name: 'pessoa_id' })
    people_id!: PeopleEntity;

  @Column({ name: 'grupo_id' })
    group_id!: number;

  @Column({ name: 'data_inativacao' })
    deleted_at!: Date;

  @Column({ name: 'hora_inativacao' })
    deleted_hour!: Date;
}
