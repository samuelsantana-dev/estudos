import {
  Entity, Column, PrimaryColumn, OneToOne, JoinColumn,
} from 'typeorm';
import { PeopleEntity } from './people';
import { PermissionEntity } from './permission';

@Entity({ name: 'pessoa_permissao' })
export class PersonPermissionEntity {
  @PrimaryColumn()
    id!: number;

  @OneToOne(() => PeopleEntity, (person) => person.id)
    @JoinColumn({ name: 'pessoa_id' })
    person_id!: PeopleEntity;

  @OneToOne(() => PermissionEntity, (permission) => permission.id)
    @JoinColumn({ name: 'permissao_id' })
    permission_id!: PermissionEntity;

  @Column({ name: 'data_criacao' })
    created_at!: Date;

  @Column({ name: 'hora_criacao' })
    hour_created!: Date;

  @Column({ name: 'data_inativacao' })
    deleted_at!: Date;

  @Column({ name: 'hora_inativacao' })
    deleted_hour!: string;
}
