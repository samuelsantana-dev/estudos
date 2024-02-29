import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';
import { CourseEntity } from './course';
import { GroupEntity } from './group';

@Entity({ name: 'turma' })
export class ClassEntity {
  @PrimaryGeneratedColumn()
    id!: number;

  @CreateDateColumn({ name: 'data_criacao' })
    created_date_at!: Date;

  @Column({ name: 'hora_criacao' })
    created_hour_at!: Date;

  @Column({ name: 'data_inativacao' })
    inactivated_date_at!: Date;

  @Column({ name: 'hora_inativacao' })
    inactivated_hour_at!: Date;

  @Column({ name: 'mes' })
    month!: number;

  @Column({ name: 'ano' })
    year!: number;

  @Column({ name: 'observacao', length: 200 })
    observation!: string;

  @OneToOne(() => GroupEntity, (group) => group.id)
  @JoinColumn({ name: 'grupo_id' })
    group_id!: GroupEntity;

  @OneToOne(() => CourseEntity, (course) => course.id)
  @JoinColumn({ name: 'curso_id' })
    course_id!: CourseEntity;
}
