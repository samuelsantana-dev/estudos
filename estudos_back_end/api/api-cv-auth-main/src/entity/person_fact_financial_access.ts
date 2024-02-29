import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PeopleEntity } from './people';
import { FactFinancialAcessEntity } from './fact_financial_acess';
import { GroupEntity } from './group';

@Entity({ name: 'pessoa_fato_financeiro_acesso' })
export class PersonFactFinancialAcessEntity {
  @PrimaryGeneratedColumn()
    id!: number;

  @ManyToOne(() => PeopleEntity, (person) => person.id)
  @JoinColumn({ name: 'pessoa_id' })
    person_id!: PeopleEntity;

  @ManyToOne(() => FactFinancialAcessEntity,
    (factFinancialAcessEntity) => factFinancialAcessEntity.id)
  @JoinColumn({ name: 'fato_financeiro_acesso_id' })
    fact_financial_acess_id!: FactFinancialAcessEntity;

  @ManyToOne(() => GroupEntity, (group) => group.id)
  @JoinColumn({ name: 'grupo_id' })
    group_id!: GroupEntity;

  @Column({ name: 'data_criacao' })
    created_at!: Date;

  @Column({ name: 'hora_criacao' })
    create_hour!: string;

  @Column({ name: 'data_inativacao' })
    deleted_at!: Date;
}
