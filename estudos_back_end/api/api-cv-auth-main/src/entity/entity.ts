import {
  ManyToOne, Entity, Column, PrimaryColumn, JoinColumn,
} from 'typeorm';
import { EntityTypeEntity } from './entity_type';

@Entity({ name: 'entidade' })
export class EntityTableEntity {
  @PrimaryColumn()
    id!: number;

  @Column({ name: 'data_criacao' })
    created_at!: Date;

  @Column({ name: 'hora_criacao' })
    hour_created!: Date;

  @Column({ name: 'nome' })
    name!: string;

  @Column({ name: 'numero' })
    number!: number;

  @Column({ name: 'data_inativacao' })
    deleted_at!: Date;

  @Column({ name: 'hora_inativacao' })
    deleted_hour!: Date;

  @ManyToOne(() => EntityTypeEntity, ((entityType) => entityType.id))
  @JoinColumn({ name: 'tipo_id' })
    type_id!: EntityTypeEntity;

  @Column({ name: 'grupo_id' })
    group_id!: number;

  @Column({ name: 'sigla' })
    initials!: string;

  @Column({ name: 'secretario_grupo_id' })
    secretary_group_id!: number;
}
