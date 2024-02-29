import {
  Entity, Column, PrimaryColumn, OneToOne, JoinColumn,
} from 'typeorm';
import { PeopleEntity } from './people';
import { RoleEntity } from './role';

@Entity({ name: 'pessoa_funcao' })
export class PersonRoleEntity {
  @PrimaryColumn()
    id!: number;

  @OneToOne(() => PeopleEntity, (person) => person.id)
    @JoinColumn({ name: 'pessoa_id' })
    person_id!: PeopleEntity;

  @OneToOne(() => RoleEntity, (role) => role.id)
    @JoinColumn({ name: 'funcao_id' })
    role_id!: RoleEntity;

  @Column({ name: 'data_criacao' })
    created_at!: Date;

  @Column({ name: 'hora_criacao' })
    hour_created!: Date;

  @Column({ name: 'data_inativacao' })
    deleted_at!: Date;

  @Column({ name: 'hora_inativacao' })
    deleted_hour!: string;
}
