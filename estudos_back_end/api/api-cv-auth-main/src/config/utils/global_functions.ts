/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
/* eslint consistent-return: off */
import { createQueryBuilder, getRepository } from 'typeorm';
import { EntityTableEntity } from '../../entity/entity';
import { EntityTypeEntity } from '../../entity/entity_type';
import { ParentChildGroupEntity } from '../../entity/parent_child_group';
import { PeopleEntity } from '../../entity/people';
import { ResponsibleGroupEntity } from '../../entity/responsible_group';
import { HierarchyTypes } from '../../types/hierarchy.enum';

export async function suportProfile(
  profileId: number,
): Promise<string | null> {
  const entityData = (await getRepository(EntityTableEntity)
    .createQueryBuilder('entity')
    .select([
      'entity.numero AS number_id', 'entity.tipo_id AS type_id', 'entity.grupo_id AS group_id',
    ])
    .where(`entity.grupo_id = ${profileId}`)
    .orderBy('entity.data_inativacao', 'DESC')
    .execute() as { number_id: number, type_id: number; group_id: number }[])[0];

  /* eslint consistent-return: off */
  if ((entityData.number_id !== undefined || entityData.number_id !== null)
  && entityData !== null) {
    let type = entityData.type_id;
    let profile = entityData.group_id;
    const data: string[] = [entityData?.number_id.toString()];

    while (type === 7) {
      const group: {
      father_id: number;
      name: number;
      number: number;
      type_id: number;
    }[] = await getRepository(ParentChildGroupEntity)
      .createQueryBuilder('pcg')
      .innerJoin(EntityTableEntity, 'en', 'en.grupo_id = pcg.pai_id')
      .select([
        'pcg.pai_id AS father_id',
        'en.nome AS name',
        'en.numero AS number',
        'en.tipo_id AS type_id',
      ])
      .where('pcg.filho_id = :id', { id: profile })
      .orderBy('en.data_inativacao', 'ASC')
      .andWhere('en.data_inativacao IS NULL')
      .execute();

      if (group !== undefined || group !== null) {
        type = group[0]?.type_id;
        profile = group[0]?.father_id;
      }
      if ((group[0] !== undefined || group[0] !== null) && group.length > 0) {
        type = group[0]?.type_id;
        profile = group[0]?.father_id;
      }
      if (group[0]?.type_id === 6) {
        data.unshift(`${group[0].name} `);
        return data.join('.');
      }

      data.unshift(group[0].number.toString());
    }
    return data.join('.');
  } return null;
}

interface FirstGroupTypes {
  id: number;
  group_id: number;
  type_id: number;
}

interface SuportProfileType {
  id: number;
  father_id: number;
  child_id: number;
  type_id: number;
}

interface GetHierarchy {
  group_id: number;
  father_id: number;
  number: number;
  name: string;
  type_id: number;
  type_name: string;
}

interface ProfileInfo {
  group_id: number;
  father_id: number;
  type_id: number;
}

type ReturnHierarchy = {
  father_id: number;
  group_id: number;
  name: string;
  number: number;
  type: {
    id: number;
    name: string;
  }
}

export default class GroupUtilsFunctions {
  async getAllGroupsChild(profileId: number, entityTypes: number[] = []): Promise<number[]> {
    const oldArray: number[] = [profileId];
    const newArray: number[] = [];
    let isFirst: boolean = true;

    function verifyIsFirstOldArray(first: boolean): void {
      if (!first) {
        oldArray.length = 0;
      }

      isFirst = false;
    }

    function verifyIsFirstNewArray(): void {
      newArray.length = 0;
    }

    while (oldArray.length !== newArray.length) {
      verifyIsFirstOldArray(isFirst);

      newArray.forEach((item) => { oldArray.push(Number(item)); });

      /* eslint-disable-next-line no-await-in-loop */
      const groupIds: { child_id: number }[] = await getRepository(ParentChildGroupEntity).query(`
          SELECT
            grupo_pai_filho.filho_id AS child_id
          FROM
            grupo_pai_filho
  
          JOIN
            entidade
          ON
            entidade.grupo_id = grupo_pai_filho.filho_id
  
          WHERE 
            grupo_pai_filho.pai_id IN (${oldArray})

          ${entityTypes.length > 0 ? `AND entidade.tipo_id IN (${entityTypes})` : ''}
  
          AND
            grupo_pai_filho.data_inativacao IS NULL
          AND
            entidade.data_inativacao IS NULL
  
          ORDER BY
            entidade.nome ASC
        `);

      verifyIsFirstNewArray();
      groupIds.forEach((item) => { newArray.push(Number(item.child_id)); });

      newArray.push(profileId);

      if (oldArray.length === newArray.length) {
        return newArray;
      }
    }

    return newArray;
  }

  async suportProfile(profileId: number): Promise<number | null> {
    const firstGroup: FirstGroupTypes[] = await getRepository(EntityTypeEntity)
      .createQueryBuilder('en')
      .select([
        'en.id AS id',
        'en.grupo_id AS group_id',
        'en.tipo_id AS type_id',
      ])
      .where('en.grupo_id = :id', { id: profileId || null })
      .andWhere('en.data_inativacao IS NULL')
      .andWhere('en.hora_inativacao IS NULL')
      .execute();

    if (firstGroup.length === 0) return null;
    if (firstGroup[0]?.type_id <= 5) return profileId;

    let churchGroup: number = firstGroup[0].group_id;
    let typeId: number = firstGroup[0]?.type_id;

    while (typeId !== HierarchyTypes.CHURCH) {
      /* eslint-disable no-await-in-loop */
      const group: SuportProfileType[] = await getRepository(ParentChildGroupEntity)
        .createQueryBuilder('pc')
        .innerJoin(EntityTypeEntity, 'en', 'en.group_id=pc.pai_id')
        .select([
          'pc.id AS id',
          'pc.pai_id AS father_id',
          'pc.filho_id AS child_id',
          'en.tipo_id AS type_id',
        ])
        .where('pc.filho_id = :id', { id: churchGroup })
        .andWhere('en.data_inativacao IS NULL')
        .andWhere('en.hora_inativacao IS NULL')
        .andWhere('pc.data_inativacao IS NULL')
        .andWhere('pc.hora_inativacao IS NULL')
        .execute();
      churchGroup = group[0].father_id;
      typeId = group[0]?.type_id;
    }

    return churchGroup;
  }

  async getBishopData(user_id: number) {
    const userProfiles = await this.getProfileInfo(user_id);
    const groupResponsibleRepository = getRepository(ResponsibleGroupEntity);

    const secretary = userProfiles
      .find((item) => item.type_id === HierarchyTypes.SECRETARY) || {} as ProfileInfo;

    const bishopGroup = secretary.father_id;

    const bishopResponsibleGroup = await groupResponsibleRepository.findOne({
      where: {
        group_id: bishopGroup,
      },
      relations: ['people_id'],
    });
    const bishopData = (await getRepository(ResponsibleGroupEntity)
      .createQueryBuilder('group_responsible')
      .innerJoin(EntityTableEntity, 'entity', 'entity.grupo_id = group_responsible.grupo_id')
      .innerJoin(EntityTypeEntity, 'entity_type', 'entity_type.id = entity.tipo_id')
      .select([
        'group_responsible.id AS id', 'group_responsible.grupo_id AS group_id',
        'entity.nome AS name', 'entity.tipo_id AS type_id',
        'group_responsible.data_criacao AS create_at', 'entity.tipo_id AS type_id',
        'group_responsible.data_inativacao AS delete_at', 'entity_type.nome AS type_name',
      ])
      .where(`group_responsible.pessoa_id = ${bishopResponsibleGroup?.people_id.id}`)
      .andWhere(`group_responsible.grupo_id = ${bishopGroup}`)
      .orderBy('entity.data_inativacao', 'DESC')
      .execute());

    const bishopLeaders = await getRepository(ParentChildGroupEntity)
      .createQueryBuilder('pc')
      .innerJoin(ResponsibleGroupEntity, 'gr', 'gr.grupo_id = pc.pai_id')
      .innerJoin(PeopleEntity, 'people', 'people.id = gr.pessoa_id')
      .select([
        'pc.pai_id AS id', 'people.nome AS name',
      ])
      .where(`pc.filho_id = ${bishopGroup}`)
      .orderBy('gr.data_criacao', 'DESC')
      .execute();

    return { bishopProfiles: bishopData, bishopLeaders };
  }

  async getHierarchy(
    groupId: number | undefined,
    typeIdLimit: HierarchyTypes = HierarchyTypes.COORDINATION,
  ): Promise<ReturnHierarchy[]> {
    const teamManager: ReturnHierarchy[] = (await createQueryBuilder()
      .select([
        'pc.filho_id AS group_id',
        'pc.pai_id AS father_id',
        'entity.numero AS number',
        'entity.nome AS name',
        'entity_type.id AS type_id',
        'entity_type.nome AS type_name',
      ])
      .from(ParentChildGroupEntity, 'pc')
      .innerJoin(EntityTableEntity, 'entity', 'entity.grupo_id = pc.filho_id')
      .innerJoin(EntityTypeEntity, 'entity_type', 'entity_type.id = entity.tipo_id')
      .where(`pc.filho_id = ${groupId}`)
      .andWhere('pc.data_inativacao IS NULL')
      .andWhere('entity.data_inativacao IS NULL')
      .execute() as GetHierarchy[]).map(({
      father_id, group_id, name, number, type_id, type_name,
    }) => ({
      father_id: Number(father_id),
      group_id: Number(group_id),
      name,
      number,
      type: {
        id: Number(type_id),
        name: type_name,
      },
    }));
    if (teamManager.length && teamManager[0].father_id) {
      return teamManager;
    }

    if (!teamManager[0] && teamManager.length === 0) {
      return [];
    }

    let type = teamManager[0].type.id;
    let team = teamManager[0].father_id;

    while (type >= typeIdLimit) {
      const teamData: ReturnHierarchy[] = (await createQueryBuilder()
        .select([
          'pc.filho_id AS group_id',
          'pc.pai_id AS father_id',
          'entity.numero AS number',
          'entity.nome AS name',
          'entity_type.id AS type_id',
          'entity_type.nome AS type_name',
        ])
        .from(ParentChildGroupEntity, 'pc')
        .innerJoin(EntityTableEntity, 'entity', 'entity.grupo_id = pc.filho_id')
        .innerJoin(EntityTypeEntity, 'entity_type', 'entity_type.id = entity.tipo_id')
        .where(`pc.filho_id = ${team}`)
        .andWhere('pc.data_inativacao IS NULL')
        .andWhere('entity.data_inativacao IS NULL')
        .execute() as GetHierarchy[]).map(({
        father_id, group_id, name, number, type_id, type_name,
      }) => ({
        father_id: Number(father_id),
        group_id: Number(group_id),
        name,
        number,
        type: {
          id: Number(type_id),
          name: type_name,
        },
      }));

      if ((teamData[0].type.id !== undefined || teamData[0].type.id !== null)
        && teamData[0].father_id !== undefined
        && teamData[0].type !== undefined
        && teamData[0].name !== undefined
        && teamData.length > 0) {
        type = teamData[0]?.type.id;
        team = teamData[0]?.father_id;
      }

      teamManager.unshift(...teamData);
    }
    return teamManager;
  }

  async getProfileInfo(person_id: number) {
    const profilesInfo = (await createQueryBuilder()
      .select([
        'pc.filho_id AS group_id',
        'pc.pai_id AS father_id',
        'et.tipo_id AS type_id',
      ])
      .from(ResponsibleGroupEntity, 'rp')
      .innerJoin(ParentChildGroupEntity, 'pc', 'rp.grupo_id = pc.filho_id')
      .innerJoin(EntityTableEntity, 'et', 'et.grupo_id = rp.grupo_id')
      .where(`rp.pessoa_id = ${person_id}`)
      .andWhere('pc.data_inativacao IS NULL')
      .andWhere('rp.data_inativacao IS NULL')
      .andWhere('et.data_inativacao IS NULL')
      .execute() as ProfileInfo[]).map((item) => ({
      father_id: Number(item.father_id),
      group_id: Number(item.group_id),
      type_id: item.type_id,
    }));
    return profilesInfo;
  }

  async getUserChurch(person_id: number) {
    const profilesInfo = await this.getProfileInfo(person_id);

    let teamProfile = profilesInfo.find((item) => [HierarchyTypes.TEAM,
      HierarchyTypes.SUB_TEAM].includes(item.type_id)) || {} as ProfileInfo;

    while (teamProfile.type_id > HierarchyTypes.TEAM) {
      const newProfile: ReturnHierarchy[] = await this.getHierarchy(teamProfile.father_id);
      if (newProfile[0]) {
        const { father_id, group_id, type: { id } } = newProfile[0];

        teamProfile = {
          father_id,
          group_id,
          type_id: id,
        };
      }
    }
    return teamProfile.father_id ?? null;
  }

  async getEntityName(
    profileId: number,
    type: number,
    hierarchyArray: ReturnHierarchy[] | undefined = undefined,
  ): Promise<string | undefined> {
    const hierarchy = hierarchyArray || await this.getHierarchy(profileId, type);

    const handleCoordenationName = (hier: ReturnHierarchy[], paramType: number) => `COORDENAÇÃO.${hier.find((team) => team.type.id === paramType && paramType === HierarchyTypes.COORDINATION)?.number}`;
    const handleTeamName = (hier: ReturnHierarchy[], paramType: number) => hier
      .find((team) => team.type.id === paramType && (
        paramType <= HierarchyTypes.TEAM || paramType <= HierarchyTypes.SECRETARY
      ))?.name;

    const handleSubTeamName = (hier: ReturnHierarchy[]) => hier
      .filter((team) => (
        team.type.id >= HierarchyTypes.TEAM && team.type.id <= HierarchyTypes.SUB_TEAM
      ))
      .map((item) => `${item.type.id === HierarchyTypes.TEAM ? `${item.name} ` : `.${item.number}`}`)
      .join('');

    const handleSecretaryName = (hier: ReturnHierarchy[], paramType: number) => hier
      .find((team) => team.type.id === paramType && (
        paramType === HierarchyTypes.SECRETARY
      ))?.name;

    if (hierarchy.length === 0) return undefined;

    switch (type) {
      case HierarchyTypes.COORDINATION:
        return handleCoordenationName(hierarchy, type);
      case HierarchyTypes.TEAM:
        return handleTeamName(hierarchy, type);
      case HierarchyTypes.SUB_TEAM:
        return handleSubTeamName(hierarchy);
      case HierarchyTypes.SECRETARY:
        return handleSecretaryName(hierarchy, type);
      default:
        return hierarchy.find((group) => group.type.id === type)?.name;
    }
  }

  async generateIndentifierNumber(groupId: number): Promise<string | null> {
    const hierarchy = (await this.getHierarchy(groupId)).map((item) => (item.type.id
      >= HierarchyTypes.CHURCH ? `000${item.group_id}` : `0000${item.group_id}`));
    if (hierarchy.length === 0) return null;
    return hierarchy.join('');
  }

  async checkIfIsFromDF(churchId: number): Promise<boolean> {
    const dfCoordenation = 3110;

    const churchsIdsFromDF = await this.getAllGroupsChild(
      Number(dfCoordenation),
      [HierarchyTypes.COORDINATION, HierarchyTypes.CHURCH],
    );

    const parentsGroup = await this.getHierarchy(churchId, HierarchyTypes.TEAM);

    const isFromDf = parentsGroup.find((item: any) => churchsIdsFromDF.includes(item.group_id));

    return !!isFromDf;
  }
}
