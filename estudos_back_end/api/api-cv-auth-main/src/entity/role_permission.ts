import {
  Entity, Column, PrimaryColumn, OneToOne, JoinColumn,
} from 'typeorm';
import { RoleEntity } from './role';
import { PermissionEntity } from './permission';

@Entity({ name: 'funcao_permissao' })
export class RolePermissionEntity {
  @PrimaryColumn()
    id!: number;

  @OneToOne(() => RoleEntity, (role) => role.id)
    @JoinColumn({ name: 'funcao_id' })
    role_id!: RoleEntity;

  @OneToOne(() => PermissionEntity, (permission) => permission.id)
    @JoinColumn({ name: 'permissao_id' })
    permission_id!: RoleEntity;

  @Column({ name: 'data_criacao' })
    created_at!: Date;

  @Column({ name: 'hora_criacao' })
    hour_created!: Date;

  @Column({ name: 'data_inativacao' })
    deleted_at!: Date;

  @Column({ name: 'hora_inativacao' })
    deleted_hour!: string;
}
