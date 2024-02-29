import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'privacidade' })
export class PrivacyEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ name: 'politicas' })
  public policies!: string;

  @Column({ name: 'data_criacao' })
  public created_at!: Date;

  @Column({ name: 'hora_criacao' })
  public hour_created!: Date;

  @Column({ name: 'data_inativacao' })
  public deleted_at!: Date;

  @Column({ name: 'hora_inativacao' })
  public deleted_hour!: Date;
}
