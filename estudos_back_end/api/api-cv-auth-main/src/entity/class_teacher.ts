import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';
import { ClassEntity } from './class';
import { PeopleEntity } from './people';

@Entity({ name: 'turma_professor' })
export class ClassTeacherEntity {
  @PrimaryGeneratedColumn()
    id!: number;

  @OneToOne(() => ClassEntity, (theClass) => theClass.id)
  @JoinColumn({ name: 'turma_id' })
    class_id!: ClassEntity;

  @OneToOne(() => PeopleEntity, (person) => person.id)
  @JoinColumn({ name: 'pessoa_id' })
    person_id!: PeopleEntity;

  @CreateDateColumn({ name: 'data_criacao' })
    created_date_at!: Date;

  @Column({ name: 'hora_criacao' })
    created_hour_at!: Date;

  @Column({ name: 'data_inativacao' })
    inactivated_date_at!: Date;

  @Column({ name: 'hora_inativacao' })
    inactivated_hour_at!: Date;
}
