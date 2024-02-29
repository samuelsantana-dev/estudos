import {
  Entity,
  Column,
  PrimaryColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { PeopleEntity } from './people';
import { CourseAccessEntity } from './course_access';
import { GroupEntity } from './group';

@Entity({ name: 'pessoa_curso_acesso' })
export class PersonCourseAccessEntity {
  @PrimaryColumn()
    id!: number;

  @OneToOne(() => PeopleEntity, (person) => person.id)
    @JoinColumn({ name: 'pessoa_id' })
    person_id!: PeopleEntity | number;

  @OneToOne(() => CourseAccessEntity, (courseAccess) => courseAccess.id)
    @JoinColumn({ name: 'curso_acesso_id' })
    course_access!: CourseAccessEntity | number;

  @Column({ name: 'data_criacao' })
    created_at!: Date;

  @Column({ name: 'hora_criacao' })
    hour_created!: Date;

  @Column({ name: 'data_inativacao' })
    deleted_at!: Date;

  @Column({ name: 'hora_inativacao' })
    deleted_hour!: Date;

  @OneToOne(() => GroupEntity, (group) => group.id)
    @JoinColumn({ name: 'grupo_id' })
    group_id!: GroupEntity | number;
}
