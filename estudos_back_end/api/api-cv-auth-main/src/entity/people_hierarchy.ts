import {
  Column, Entity, JoinColumn, OneToOne, PrimaryColumn,
} from 'typeorm';
import { HierarchyEntity } from './hierarchy';
import { PeopleEntity } from './people';

@Entity({ name: 'pessoa_hierarquia' })
export class PeopleHierarchyEntity {
  @PrimaryColumn()
    id!: number;

  @OneToOne(() => PeopleEntity, (person) => person.id)
  @JoinColumn({ name: 'pessoa_id' })
    person_id!: PeopleEntity;

  @OneToOne(() => HierarchyEntity, (hierarchy) => hierarchy.id)
  @JoinColumn({ name: 'hierarquia_id' })
    hierarchy_id!: HierarchyEntity;

  @Column({ name: 'data_criacao' })
    created_at!: Date;

  @Column({ name: 'hora_criacao' })
    hour_created!: string;

  @Column({ name: 'data_inativacao' })
    deleted_at!: Date;

  @Column({ name: 'hora_inativacao' })
    deleted_hour!: string;
}
