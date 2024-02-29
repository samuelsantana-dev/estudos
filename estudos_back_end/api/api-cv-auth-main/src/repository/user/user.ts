/* eslint-disable no-case-declarations */
import bcrypt from 'bcrypt';
import { getManager, getRepository, IsNull } from 'typeorm';
import { GlobalFunctions } from 'cv-global-functions';
import validationUser from '../../yup/user';
import validation from '../../yup/auth';
import ResponseOnSucessOrError from '../../config/utils/response';
import { ResponseApiOnSucessOrErrorType } from '../../types/response_type';
import { PeopleEntity } from '../../entity/people';
import { ResponsibleGroupEntity } from '../../entity/responsible_group';
import { EntityTableEntity } from '../../entity/entity';
import { ParentChildGroupEntity } from '../../entity/parent_child_group';
import { EntityTypeEntity } from '../../entity/entity_type';
import { triggerExternalAPIPassword } from '../auth/auth';
import GroupUtilsFunctions, { suportProfile } from '../../config/utils/global_functions';
import { s3Upload } from '../../config/s3';
import { HierarchyTypes } from '../../types/hierarchy.enum';
// import { saraIdProvider } from '../../providers/SaraIdProvider';

const globalFunctions = new GlobalFunctions();
const groupUtils = new GroupUtilsFunctions();

export interface IUserPayload {
  firstName: string
  lastName: string
  email: string
}

export interface MergeUsersInterface {
  email: string;
  password?: string;
  name?: string;
  gender?: 'F' | 'M';
  phone_number?: number;
  photo?: string;
}

export interface SetUserDataTypes {
  id: string;
  name: string;
  telephone: number;
  email: string;
  zip_code: number;
  state_local: string;
  district: string;
  address: string;
  birth_date?: Date;
}

export interface UserDataResponse {
  data: PeopleEntity | null
}

export interface RequestChangePass {
  oldPassword: string
  newPassword: string
  id: number
}

interface ProfileData {
  id: number;
  group_id: number;
  name: string;
  number: number | null;
  type_id: number;
  type_name: string;
  create_at: string;
  delete_at: string;
}

interface ProfileType {
  is_active: boolean;
  id: number;
  group_id: number;
  name: string | null;
  number: number | null;
  entity: { id: number, name: string },
  leader_one: string;
  leader_two: string | null;
  create_at: string;
  delete_at: string;
}

// interface ProfileNewType {
//   id: number;
//   group_id: number;
//   type_id: number;
//   name: string | null;
// }

interface IPersonInfo extends PeopleEntity {
  entityName: string | undefined;
  church: {
    name: string | undefined;
    group_id: number | undefined;
  }
}
const responseOn = new ResponseOnSucessOrError();

export const getUser = async (
  id: number,
  profileIdTeam: string,
): Promise<ResponseApiOnSucessOrErrorType<IPersonInfo | null, string | unknown | null>> => {
  const profileId = Number(profileIdTeam);
  if (Number.isNaN(profileId)) { return responseOn.successOrBadRequest<null, string>(null, 400, 'Formato do id inválido!'); }

  const entityManager = getManager();
  const group = await entityManager.findOne(EntityTableEntity, {
    where: {
      group_id: profileId,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    },
    relations: ['type_id'],
  });
  if (!group) { return responseOn.successOrBadRequest<null, string>(null, 404, 'Perfil não encontrado'); }

  const user = await entityManager.findOne(PeopleEntity, {
    id,
    deleted_at: IsNull(),
    deleted_hour: IsNull(),
  });
  if (!user) { return responseOn.successOrBadRequest<null, string>(null, 404, 'Informações de usuário não encontradas'); }

  const myEntity = await globalFunctions.getEntityName(group.group_id, group.type_id.id);
  const church = (await globalFunctions
    .getHierarchy(group.group_id))
    .find((item) => item.type.id === HierarchyTypes.CHURCH);

  return responseOn.successOrBadRequest<IPersonInfo, null>({
    ...user,
    entityName: myEntity,
    church: {
      name: church?.name,
      group_id: church?.group_id,
    },
  }, 200, null);
};

export const setUser = async (user: SetUserDataTypes)
  : Promise<ResponseApiOnSucessOrErrorType<string | null, string | unknown | null>> => {
  const { id, ...data } = user;
  const userId = Number(id);
  const peopleRepository = getRepository(PeopleEntity);

  if (Number.isNaN(userId)) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Formato do id inválido!');
  }

  try {
    await validationUser.setUserValidation.validate(data, { abortEarly: true });
  } catch (error) {
    const { message } = error as { message: string };
    return responseOn.successOrBadRequest<null, string>(null, 401, message);
  }

  const people = await peopleRepository.findOne({
    id: userId,
    deleted_at: IsNull(),
    deleted_hour: IsNull(),
  });

  if (!people) { return responseOn.successOrBadRequest<null, string>(null, 400, 'Usuário não encontrado!'); }

  if (data.email !== people.email) {
    const foundEmail = await peopleRepository.findOne({ email: data.email });

    if (foundEmail) {
      return responseOn.successOrBadRequest<null, string>(null, 400, 'Email já cadastrado anteriormente');
    }
  }
  if (data.birth_date) {
    data.birth_date = new Date(`${data.birth_date} 00:00:00`);
  }
  try {
    await peopleRepository.update({
      id: userId,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    }, data);

    return responseOn.successOrBadRequest<string, null>('Usuário atualizado', 200, null);
  } catch (error) {
    return responseOn.error<unknown>(error);
  }
};

export const inactivateUser = async (user: string): Promise<
  ResponseApiOnSucessOrErrorType<string | null, string | unknown | null>
> => {
  const userId = Number(user);

  if (Number.isNaN(userId)) { return responseOn.successOrBadRequest<null, string>(null, 401, 'Usuário não autorizado'); }
  try {
    const peopleRepository = getRepository(PeopleEntity);
    await peopleRepository.update({
      id: userId,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    }, {
      name: ' ',
      email: null,
      password: null,
      document: null,
      birth_date: null,
      token: null,
      token_date: null,
      token_hour: null,
      telephone: null,
      photo: null,
      date_revision: null,
      gender: null,
      event_id: null,
      profession_id: null,
      zip_code: null,
      state_local: null,
      district: null,
      address: null,
      complement: null,
      token_notification: null,
      email_revision: null,
      email_alternative: null,
      origin: null,
      deleted_at: new Date(),
      origin_deleted: 'AUTH',
    });
    return responseOn.successOrBadRequest<string, null>('Usuário atualizado', 200, null);
  } catch (error) {
    return responseOn.error<unknown>(error);
  }
};

export const changePassword = async (body: RequestChangePass): Promise<
  ResponseApiOnSucessOrErrorType<string | null, string | unknown | null>
> => {
  try {
    await validation.setPasswordReset.validate({
      password: body.newPassword,
    }, { abortEarly: true });
  } catch (error) {
    const err = error as { message: string };
    return responseOn.successOrBadRequest<null, string>(null, 403, err.message);
  }

  const peopleRepository = getRepository(PeopleEntity);
  const people = await peopleRepository.findOne({
    id: body.id,
    deleted_at: IsNull(),
    deleted_hour: IsNull(),
  }, { select: ['password', 'id'] });

  if (!people) {
    return responseOn.successOrBadRequest<null, string>(null, 404, 'Usuário não encontrado');
  }

  if (!people.password) {
    return responseOn.successOrBadRequest<null, string>(null, 404, 'Usuário não encontrado');
  }

  const match = await bcrypt.compareSync(body.oldPassword, people.password.replace('$2y$', '$2b$'));
  if (!match) { return responseOn.successOrBadRequest<null, string>(null, 403, 'Senha antiga inválida'); }

  const salt = bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(body.newPassword, salt);

  try {
    await peopleRepository.update({ id: people.id }, { password: hash });
    await triggerExternalAPIPassword(people.id);

    return responseOn.successOrBadRequest<null, string>(null, 200, 'Sua senha foi alterada');
  } catch (error: any) {
    return responseOn.error<unknown>(error);
  }
};

export const mergeUsers = async (
  userInfo: MergeUsersInterface,
  hostname: string | undefined,
): Promise<ResponseApiOnSucessOrErrorType<PeopleEntity | null, string | unknown | null>> => {
  const securedHost = process.env.HOST_SARA_CHRUCH;

  if (hostname === undefined) { return responseOn.successOrBadRequest<null, string>(null, 403, 'unauthorized'); }

  if (hostname !== securedHost) { return responseOn.successOrBadRequest<null, string>(null, 403, 'unauthorized'); }

  const peopleRepository = getRepository(PeopleEntity);
  const oldUser = await peopleRepository.findOne({
    where: {
      email: userInfo.email,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    },
  });

  if (oldUser === undefined) {
    return responseOn.successOrBadRequest<null, string>(null, 404, 'Usuário não encontrado');
  }

  const updatedUser = await peopleRepository.save({
    id: oldUser.id,
    password: userInfo.password,
    ...userInfo,
  });

  return responseOn.successOrBadRequest<PeopleEntity, null>(updatedUser, 200, null);
};

export async function executeProfileResponse(
  isActive: boolean,
  id: number,
  groupId: number,
  name: string | null,
  number: number | null,
  leaderOne: string,
  leaderTwo: string | null,
  entity: { id: number, name: string },
  createAt: string,
  deleteAt: string,
  hasSecretary?: number,
) {
  const profile: ProfileType[] | null = [];
  profile.push({
    is_active: isActive,
    id,
    group_id: groupId,
    name,
    number,
    leader_one: leaderOne,
    leader_two: leaderTwo,
    entity,
    create_at: createAt,
    delete_at: deleteAt,
  });
  if (hasSecretary) {
    const { bishopProfiles, bishopLeaders } = await groupUtils.getBishopData(hasSecretary);
    bishopProfiles.map((profileItem: ProfileData) => profile.push({
      is_active: !profileItem.delete_at,
      id: profileItem.id,
      group_id: profileItem.group_id,
      name: profileItem.name,
      number: !profileItem.delete_at ? profileItem.number : null,
      leader_one: bishopLeaders[0].name,
      leader_two: bishopLeaders.length >= 2 ? bishopLeaders[1].name : null,
      entity: { id: profileItem.type_id, name: profileItem.type_name },
      create_at: profileItem.create_at,
      delete_at: profileItem.delete_at,
    }));
  }
  return profile;
}

async function handleHierarchyProfile(
  data: ProfileData[], item: ResponsibleGroupEntity, userId: number,
): Promise<ProfileType[] | null> {
  let profile: ProfileType[] | null = [];
  const parentsProfile = await getRepository(ParentChildGroupEntity).find({
    where: {
      child_id: data[0].group_id,
    },
  });
  const profileId = data[0].type_id === HierarchyTypes.PRESIDENTIAL
    ? data[0].group_id : parentsProfile[0].father_id;
  const leaders = await getRepository(ResponsibleGroupEntity).find({
    where: {
      group_id: profileId,
    },
    relations: ['people_id'],
    order: {
      id: 'DESC',
    },
  });
  if (!leaders) {
    return null;
  }
  const number = !item.deleted_at ? data[0].number : null;
  const leaderOne = leaders[0]?.people_id?.name ?? 'Não identificado';
  const leaderTwo = leaders.length >= 2 ? leaders[1]?.people_id?.name ?? 'Não identificado' : null;

  switch (true) {
    case data[0].type_id === HierarchyTypes.PRESIDENTIAL:
      profile = await executeProfileResponse(
        !item.deleted_at,
        data[0].id,
        data[0].group_id,
        data[0].name,
        !item.deleted_at ? data[0].number : null,
        leaderOne,
        leaderTwo,
        { id: data[0].type_id, name: data[0].type_name },
        data[0].create_at,
        data[0].delete_at,
      );
      return profile;

    case data[0].type_id === HierarchyTypes.SECRETARY && data[0].delete_at === null:
      profile = await executeProfileResponse(
        !item.deleted_at,
        data[0].id,
        data[0].group_id,
        !item.deleted_at ? data[0].name : null,
        !number ? null : number,
        leaderOne,
        leaderTwo,
        { id: data[0].type_id, name: data[0].type_name },
        data[0].create_at,
        data[0].delete_at,
        userId,
      );
      return profile;

    case data[0].type_id <= HierarchyTypes.TEAM:
      const nameEntity = await groupUtils.getEntityName(data[0].group_id, data[0].type_id);
      profile = await executeProfileResponse(
        !item.deleted_at,
        data[0].id,
        data[0].group_id,
        nameEntity ?? data[0].name,
        !number ? null : number,
        leaderOne,
        leaderTwo,
        { id: data[0].type_id, name: data[0].type_name },
        data[0].create_at,
        data[0].delete_at,
      );
      return profile;
    default:

      const nameSubTeam = !item.deleted_at ? await suportProfile(item.group_id) : null;

      profile = await executeProfileResponse(
        !item.deleted_at,
        data[0].id,
        data[0].group_id,
        !item.deleted_at ? nameSubTeam : null,
        !number ? null : number,
        leaderOne,
        leaderTwo,
        { id: data[0].type_id, name: data[0].type_name },
        data[0].create_at,
        data[0].delete_at,
      );
  }
  return profile;
}

export const getProfile = async (
  id: number,
): Promise<ResponseApiOnSucessOrErrorType<ProfileType[] | {} | null, string | unknown | null>> => {
  const idNumber = Number(id);
  if (!id || Number.isNaN(idNumber)) {
    return responseOn.successOrBadRequest<null, string>(
      null,
      400,
      !id ? 'Id não informado!' : 'Formato do id inválido!',
    );
  }

  try {
    const groupResponsibleRepository = getRepository(ResponsibleGroupEntity);
    const userProfile = await groupResponsibleRepository.find({
      where: {
        people_id: id,
      },
      relations: ['people_id'],
    });
    const profile: ProfileType[] | null = [];
    await Promise.all(userProfile.map(async (item) => {
      const data: ProfileData[] = (await getRepository(ResponsibleGroupEntity)
        .createQueryBuilder('group_responsible')
        .innerJoin(EntityTableEntity, 'entity', 'entity.grupo_id = group_responsible.grupo_id')
        .innerJoin(EntityTypeEntity, 'entity_type', 'entity_type.id = entity.tipo_id')
        .select([
          'group_responsible.id AS id', 'group_responsible.grupo_id AS group_id',
          'entity.nome AS name', 'entity.tipo_id AS type_id',
          'group_responsible.data_criacao AS create_at', 'entity.tipo_id AS type_id',
          'group_responsible.data_inativacao AS delete_at', 'entity_type.nome AS type_name',
        ])
        .where(`group_responsible.grupo_id = ${item.group_id}`)
        .andWhere(`group_responsible.pessoa_id = ${item.people_id.id}`)
        .orderBy('entity.data_inativacao', 'DESC')
        .execute() as ProfileData[]);
      if (data[0]) {
        const getAllProfiles = await handleHierarchyProfile(data, item, id);
       getAllProfiles!.map((i) => profile?.push(i));
      }
      return {};
    }));

    return responseOn.successOrBadRequest<ProfileType[] | {}, null>(
      profile.sort((a) => (a.is_active ? 1 : -1)), 200, null,
    );
  } catch (error) {
    return responseOn.error<unknown>(error);
  }
};

// export const getProfile = async (
//   id: number,
// ): Promise<ResponseApiOnSucessOrErrorType<ProfileNewType[] | null, string | unknown | null>> => {
//   const idNumber = Number(id);
//   if (!id || Number.isNaN(idNumber)) {
//     return responseOn.successOrBadRequest<null, string>(
//       null,
//       400,
//       !id ? 'Id não informado!' : 'Formato do id inválido!',
//     );
//   }

//   const profiles = await saraIdProvider().getGroups([idNumber]);

//   const profilesName = await globalFunctions.getTeamsNames([idNumber]);

//   const profileFormated: ProfileNewType[] = profiles.map((profile: any) => ({
//     id: profile.id,
//     group_id: profile.groups[profile.groups.length - 1].number,
//     type_id: profile.groups[profile.groups.length - 1].type,
//     name: profilesName?.find(
//       (profileName) => profileName.group === profile.groups[profile.groups.length - 1].number,
//     )?.teamName,
//   }));

//   return responseOn.successOrBadRequest<ProfileNewType[], null>(profileFormated, 200, null);
// };

export const saveImg = async (
  id: number,
  image: any,
): Promise<
  ResponseApiOnSucessOrErrorType<string | null, string | unknown | null>
> => {
  if (!id) { return responseOn.successOrBadRequest<null, string>(null, 400, 'Id inválido'); }
  try {
    const personRepository = getRepository(PeopleEntity);
    const userProfile = await personRepository.findOne({
      where: {
        id,
        deleted_at: IsNull(),
        deleted_hour: IsNull(),
      },
    });

    if (!userProfile) { return responseOn.successOrBadRequest<null, string>(null, 400, 'Pessoa não encontrada'); }

    if (!image) { return responseOn.successOrBadRequest<null, string>(null, 400, 'Nenhuma imagem encontrada!'); }

    const S3Image = await s3Upload(image);

    const savedImg = await personRepository.update(
      { id },
      { photo: S3Image.Key },
    );

    if (!savedImg || savedImg.affected === 0) { return responseOn.successOrBadRequest<null, string>(null, 400, 'Não foi possível salvar a imagem do usuário!'); }

    return responseOn.successOrBadRequest<any, null>(
      image,
      200,
      null,
    );
  } catch (error) {
    return responseOn.error<unknown>(error);
  }
};
