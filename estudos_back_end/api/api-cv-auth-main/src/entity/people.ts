import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pessoa' })
export class PeopleEntity {
  @PrimaryColumn()
    id!: number;

  @Column({ name: 'nome' })
    name!: string;

  @Column({
    type: String,
    unique: true,
    nullable: true,
    name: 'email',
  })
    email!: string | null;

  @Column({
    type: String,
    unique: true,
    nullable: true,
    name: 'senha',
    select: false,
  })
    password!: string | null;

  @Column({ select: false, name: 'data_criacao' })
    created_at!: Date;

  @Column({ select: false, name: 'hora_criacao' })
    hour_created!: Date;

  @Column({ name: 'data_inativacao' })
    deleted_at!: Date;

  @Column({ name: 'hora_inativacao' })
    deleted_hour!: Date;

  @Column({
    type: Number,
    unique: true,
    nullable: true,
    name: 'documento',
  })
    document!: number | null;

  @Column({
    type: Date,
    unique: true,
    nullable: true,
    name: 'data_nascimento',
  })
    birth_date!: Date | null;

  @Column({
    type: String,
    unique: true,
    nullable: true,
    name: 'token',
    select: false,
  })
    token!: string | null;

  @Column({
    type: Date,
    unique: true,
    nullable: true,
    name: 'token_data',
    select: false,
  })
    token_date!: Date | null;

  @Column({
    type: Date,
    unique: true,
    nullable: true,
    name: 'token_hora',
    select: false,
  })
    token_hour!: Date | null;

  @Column({
    type: Number,
    unique: true,
    nullable: true,
    name: 'telefone',
  })
    telephone!: number | null;

  @Column({
    type: String,
    unique: true,
    nullable: true,
    name: 'foto',
  })
    photo!: string | null;

  @Column({
    type: Date,
    unique: true,
    nullable: true,
    name: 'data_revisao',
  })
    date_revision!: Date | null;

  @Column({
    type: String,
    unique: true,
    nullable: true,
    name: 'sexo',
  })
    gender!: string | null;

  @Column({
    type: String,
    unique: true,
    nullable: true,
    name: 'atualizar_dados',
  })
    update_data!: string | null;

  @Column({
    type: Number,
    unique: true,
    nullable: true,
    name: 'evento_id',
    select: false,
  })
    event_id!: number | null;

  @Column({
    type: Number,
    unique: true,
    nullable: true,
    name: 'profissao_id',
    select: false,
  })
    profession_id!: number | null;

  @Column({
    type: Number,
    unique: true,
    nullable: true,
    name: 'cep',
  })
    zip_code!: number| null;

  @Column({
    type: String,
    unique: true,
    nullable: true,
    name: 'localidade_uf',
  })
    state_local!: string | null;

  @Column({
    type: String,
    unique: true,
    nullable: true,
    name: 'bairro_distrito',
  })
    district!: string | null;

  @Column({
    type: String,
    unique: true,
    nullable: true,
    name: 'logradouro',
  })
    address!: string | null;

  @Column({
    type: String,
    unique: true,
    nullable: true,
    name: 'complemento',
  })
    complement!: string | null;

  @Column({
    type: String,
    unique: true,
    nullable: true,
    name: 'token_notificacao',
    select: false,
  })
    token_notification!: string | null;

  @Column({
    type: String,
    unique: true,
    nullable: true,
    name: 'email_revisao',
  })
    email_revision!: string | null;

  @Column({
    type: String,
    unique: true,
    nullable: true,
    name: 'email_alternativo',
    select: false,
  })
    email_alternative!: string | null;

  @Column({
    type: String,
    unique: true,
    nullable: true,
    name: 'origem',
    select: false,
  })
    origin!: string | null;

    @Column({ name: 'origem_inativacao' })
      origin_deleted!: string;
}
