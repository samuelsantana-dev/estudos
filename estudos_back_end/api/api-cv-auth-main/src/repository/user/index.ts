import {
  getManager,
  getRepository,
  IsNull,
} from 'typeorm';
import GroupUtilsFunctions from '../../config/utils/global_functions';
import ResponseOnSucessOrError from '../../config/utils/response';
import { ClassTeacherEntity } from '../../entity/class_teacher';
import { CourseAccessEntity } from '../../entity/course_access';
import { EntityTableEntity } from '../../entity/entity';
import { FactFinancialAcessEntity } from '../../entity/fact_financial_acess';
import { PeopleEntity } from '../../entity/people';
import { PersonCourseAccessEntity } from '../../entity/person_access_course';
import { PersonFactFinancialAcessEntity } from '../../entity/person_fact_financial_access';
import { PersonPrivacyEntity } from '../../entity/person_privacy';
import { PrivacyEntity } from '../../entity/privacy';
import { HierarchyTypes } from '../../types/hierarchy.enum';
import {
  IPersonInfo, IPrivacyTermsDto, IUser, RolesResponse,
} from './user.interface';

export default class User implements IUser {
  private response = new ResponseOnSucessOrError();

  private personPrivacyRepository = getRepository(PersonPrivacyEntity);

  private privacyTerms = getRepository(PrivacyEntity);

  private personRepository = getRepository(PeopleEntity);

  solveIvInfo(ivInfo: any, isTeacher: any) {
    if (ivInfo.length !== 0 && isTeacher) {
      return [ivInfo[0].iv_role].concat('PROFESSOR');
    }
    if (ivInfo.length !== 0 && !isTeacher) {
      return [ivInfo[0].iv_role];
    }
    if (ivInfo.length === 0 && isTeacher) {
      return ['PROFESSOR'];
    }
    return [];
  }

  async createPrivacyTerms(policy: string) {
    const newPolicy = await getRepository(PrivacyEntity).save({
      policies: policy,
    });
    return this
      .response
      .successOrBadRequest<PrivacyEntity, null>(newPolicy, 200, null);
  }

  async acceptPrivacyTerms(req: IPrivacyTermsDto) {
    if (typeof req.personId !== 'number') {
      return this
        .response
        .successOrBadRequest<null, string>(null, 400, 'Usuário inválido');
    }

    if (typeof req.wasAccepted !== 'boolean') {
      return this
        .response
        .successOrBadRequest<null, string>(null, 400, 'Corpo da requisição inválida');
    }

    const person = await this.personRepository.findOne({
      id: req.personId,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    });

    if (!person) {
      return this
        .response
        .successOrBadRequest<null, string>(null, 404, 'Usuário não encontrado');
    }

    const privacyTerms = (await this.privacyTerms.find({
      where: {
        deleted_at: IsNull(),
        deleted_hour: IsNull(),
      },
    })).map((item) => ({
      person,
      wasAccepted: req.wasAccepted,
      privacy: item,
    }));

    try {
      await this.personPrivacyRepository.save(privacyTerms);
    } catch (error) {
      return this.response.error<unknown>(error);
    }

    return this.response.successOrBadRequest<string, null>('Termos aceito', 201, null);
  }

  async findPrivacyTerms() {
    const terms = await this.privacyTerms.findOne({
      where: {
        deleted_at: IsNull(),
        deleted_hour: IsNull(),
      },
    }) || null;

    return this.response.successOrBadRequest<PrivacyEntity | null, null>(terms, 201, null);
  }

  async getRoles(id: string) {
    const userId = Number(id);
    const personExists = await getRepository(PeopleEntity).findOne({
      where: {
        id: userId,
        deleted_at: IsNull(),
        deleted_hour: IsNull(),
      },
    });

    if (!id || Number.isNaN(userId) || !personExists) {
      return this.response.successOrBadRequest<null, string>(null, 404, 'Id inválido');
    }

    const secretaryInfo = await getRepository(PersonFactFinancialAcessEntity)
      .createQueryBuilder('pffa')
      .select([
        'ffa.nome AS secretary_type',
        'entity.nome AS entity_name',
        'entity.tipo_id AS entity_type',
      ])
      .innerJoin(EntityTableEntity, 'entity', 'entity.grupo_id = pffa.grupo_id')
      .innerJoin(FactFinancialAcessEntity, 'ffa', 'ffa.id = pffa.fato_financeiro_acesso_id')
      .where('pffa.pessoa_id = :id', { id: userId })
      .andWhere('pffa.data_inativacao IS NULL')
      .andWhere('pffa.hora_inativacao IS NULL')
      .andWhere('entity.data_inativacao IS NULL')
      .andWhere('entity.hora_inativacao IS NULL')
      .andWhere('ffa.data_inativacao IS NULL')
      .andWhere('ffa.hora_inativacao IS NULL')
      .execute();

    const ivInfo = await getRepository(PersonCourseAccessEntity)
      .createQueryBuilder('personCourseAccess')
      .select([
        'courseAccess.nome AS iv_role',
      ])
      .innerJoin(CourseAccessEntity, 'courseAccess', 'courseAccess.id = personCourseAccess.curso_acesso_id')
      .where('personCourseAccess.pessoa_id = :id', { id: userId })
      .andWhere('personCourseAccess.data_inativacao IS NULL')
      .andWhere('personCourseAccess.hora_inativacao IS NULL')
      .andWhere('courseAccess.data_inativacao IS NULL')
      .andWhere('courseAccess.hora_inativacao IS NULL')
      .execute();

    const isTeacher = await getRepository(ClassTeacherEntity).findOne({
      where: {
        person_id: userId,
        inactivated_date_at: IsNull(),
        inactivated_hour_at: IsNull(),
      },
    });

    const camelCase = (title: string) => {
      if (title === 'SECRETARIO DO PARCEIRO DE DEUS') {
        return 'SECRETARIO_DO_PARCEIRO_DE_DEUS';
      }
      if (title === 'SECRETARIO DO PARCEIRO DE DEUS IGREJA') {
        return 'SECRETARIO_DO_PARCEIRO_DE_DEUS_IGREJA';
      }

      return '';
    };

    const ivRoles = this.solveIvInfo(ivInfo, isTeacher);
    const secretaryRole = camelCase(secretaryInfo[0]?.secretary_type) || [];

    const allRoles: any = [];
    const finalResponse = {
      roles: ivRoles || secretaryRole ? allRoles.concat(ivRoles, secretaryRole) : null,
    };

    return this.response.successOrBadRequest<RolesResponse, null>(finalResponse, 200, null);
  }

  async findOne(
    id: number,
    profileId: number,
  ) {
    if (Number.isNaN(profileId)) {
      return this
        .response
        .successOrBadRequest<null, string>(null, 400, 'Formato do id inválido!');
    }

    const entityManager = getManager();
    const group = await entityManager.findOne(EntityTableEntity, {
      where: {
        group_id: profileId,
        deleted_at: IsNull(),
        deleted_hour: IsNull(),
      },
      relations: ['type_id'],
    });

    if (!group) {
      return this
        .response
        .successOrBadRequest<null, string>(null, 404, 'Perfil não encontrado');
    }

    const user = await entityManager.findOne(PeopleEntity, {
      id,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    });
    if (!user) {
      return this
        .response
        .successOrBadRequest<null, string>(null, 404, 'Informações de usuário não encontradas');
    }

    const globalFunctions = new GroupUtilsFunctions();
    const myEntity = await globalFunctions.getEntityName(group.group_id, group.type_id.id);

    const churchGroup = await globalFunctions.getUserChurch(id);
    const church = (await globalFunctions
      .getHierarchy(churchGroup))
      .find((item) => item.type.id === HierarchyTypes.CHURCH);
    return this
      .response
      .successOrBadRequest<IPersonInfo, null>({
        ...user,
        entityName: group.type_id.id === HierarchyTypes.CHURCH ? null : myEntity,
        church: {
          name: group.type_id.id === HierarchyTypes.CHURCH ? myEntity : church?.name,
          group_id: church?.group_id ?? undefined,
        },
      }, 200, null);
  }
}
