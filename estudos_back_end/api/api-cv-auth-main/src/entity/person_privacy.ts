import {
  Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne,
} from 'typeorm';
import { PeopleEntity } from './people';
import { PrivacyEntity } from './privacy';

@Entity({ name: 'pessoa_privacidade' })
export class PersonPrivacyEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @ManyToOne(() => PrivacyEntity, (privacy) => privacy.id)
  @JoinColumn({ name: 'privacidade_id' })
  public privacy!: PrivacyEntity;

  @ManyToOne(() => PeopleEntity, (person) => person.id)
  @JoinColumn({ name: 'pessoa_id' })
  public person!: PeopleEntity;

  @Column({ name: 'aceito' })
  public wasAccepted!: boolean;

  @Column({ name: 'data_criacao' })
  public created_at!: Date;

  @Column({ name: 'hora_criacao' })
  public hour_created!: Date;

  @Column({ name: 'data_inativacao' })
  public deleted_at!: Date;

  @Column({ name: 'hora_inativacao' })
  public deleted_hour!: Date;
}
