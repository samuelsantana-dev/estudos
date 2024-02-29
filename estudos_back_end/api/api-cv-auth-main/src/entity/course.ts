import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';
import { PeopleEntity } from './people';

@Entity({ name: 'curso' })
export class CourseEntity {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column({ name: 'nome' })
    name!: string;

  @OneToOne(() => PeopleEntity, (person) => person.id)
  @JoinColumn({ name: 'pessoa_id' })
    person_id!: number;

  @CreateDateColumn({ name: 'data_criacao' })
    created_date_at!: Date;

  @Column({ name: 'hora_criacao' })
    created_hour_at!: string;

  @Column({ name: 'data_inativacao' })
    inactivated_date_at!: Date;

  @Column({ name: 'hora_inativacao' })
    inactivated_hour_at!: string;
}
