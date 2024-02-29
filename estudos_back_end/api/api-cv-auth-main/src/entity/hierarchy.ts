import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'hierarquia' })
export class HierarchyEntity {
  @PrimaryColumn()
    id!: number;

  @Column({ name: 'nome' })
    name!: string;

  @Column({ name: 'nome_feminino' })
    name_female!: string;

  @Column({ name: 'sigla' })
    sigla!: string;

  @Column({ select: false, name: 'data_criacao' })
    created_at!: Date;

  @Column({ select: false, name: 'hora_criacao' })
    hour_created!: Date;

  @Column({ name: 'data_inativacao' })
    deleted_at!: Date;

  @Column({ name: 'hora_inativacao' })
    deleted_hour!: Date;
}
