import { getManager, getRepository, IsNull } from 'typeorm';
import ResponseOnSucessOrError from '../../config/utils/response';
import { ResponseApiOnSucessOrErrorType } from '../../types/response_type';
import { RoleEntity } from '../../entity/role';
import { PermissionEntity } from '../../entity/permission';
import { PersonRoleEntity } from '../../entity/person_role';
import { PeopleEntity } from '../../entity/people';
import { RolePermissionEntity } from '../../entity/role_permission';
import { PersonPermissionEntity } from '../../entity/person_permission';

const responseOn = new ResponseOnSucessOrError();

export const createRole = async (
  name: string,
  description: string,
): Promise<ResponseApiOnSucessOrErrorType<string | null, string | unknown | null>> => {
  if (!name) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Nome necessário!');
  }
  const newFunction = {
    name,
    description,
  };
  try {
    await getRepository(RoleEntity).save(newFunction);
  } catch (error) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Algo de errado ao criar nova função!');
  }

  return responseOn.successOrBadRequest<string, null>('Função criada!', 200, null);
};

export const updateRole = async (
  id: string,
  name: string,
  description: string,
): Promise<ResponseApiOnSucessOrErrorType<string | null, string | unknown | null>> => {
  const idNumber = Number(id);
  if (!idNumber || Number.isNaN(idNumber)) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Id inválido');
  }

  if (!name) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Nome necessário!');
  }

  const roleExists = await getRepository(RoleEntity).findOne({
    where: {
      id,
      inactivated_date_at: IsNull(),
      inactivated_hour_at: IsNull(),
    },
  });
  if (!roleExists) return responseOn.successOrBadRequest<null, string>(null, 400, 'Id da função inválido!');

  try {
    await getRepository(RoleEntity).update(
      id,
      {
        name,
        description,
      },
    );
  } catch (error) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Algo de errado ao atualizar a função!');
  }

  return responseOn.successOrBadRequest<string, null>('Função atualizada!', 200, null);
};

export const deleteRole = async (
  id: string,
): Promise<ResponseApiOnSucessOrErrorType<string | null, string | unknown | null>> => {
  const idNumber = Number(id);
  if (!idNumber || Number.isNaN(idNumber)) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Id inválido');
  }

  const roleExists = await getRepository(RoleEntity).findOne({
    where: {
      id,
      inactivated_date_at: IsNull(),
      inactivated_hour_at: IsNull(),
    },
  });
  if (!roleExists) return responseOn.successOrBadRequest<null, string>(null, 400, 'Id da função inválido!');

  const currentDate = new Date();
  try {
    const data = await getManager().transaction(async (transactionalEntityManager) => {
      await transactionalEntityManager.getRepository(RoleEntity).update(
        {
          id: idNumber,
          inactivated_date_at: IsNull(),
          inactivated_hour_at: IsNull(),
        },
        {
          inactivated_date_at: currentDate,
          inactivated_hour_at: `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
        },
      );

      await transactionalEntityManager.getRepository(PersonRoleEntity).update(
        {
          role_id: idNumber as unknown as RoleEntity,
          deleted_at: IsNull(),
          deleted_hour: IsNull(),
        },
        {
          deleted_at: currentDate,
          deleted_hour: `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
        },
      );

      await transactionalEntityManager.getRepository(RolePermissionEntity).update(
        {
          role_id: idNumber as unknown as RoleEntity,
          deleted_at: IsNull(),
          deleted_hour: IsNull(),
        },
        {
          deleted_at: currentDate,
          deleted_hour: `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
        },
      );

      return 'Função deletada!';
    });

    return responseOn.successOrBadRequest<string, null>(data, 200, null);
  } catch (error) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Algo de errado ao deletar a função!');
  }
};

export const roleById = async (
  id: string,
): Promise<ResponseApiOnSucessOrErrorType<RoleEntity | null, string | unknown | null>> => {
  const idNumber = Number(id);
  if (!idNumber || Number.isNaN(idNumber)) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Id inválido');
  }

  const data = await getRepository(RoleEntity).findOne({
    id: idNumber,
    inactivated_date_at: IsNull(),
    inactivated_hour_at: IsNull(),
  });

  if (!data) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Função não encontrada!');
  }

  return responseOn.successOrBadRequest<RoleEntity, null>(data as RoleEntity, 200, null);
};

export const allroles = async (): Promise<
  ResponseApiOnSucessOrErrorType<RoleEntity[] | null, string | unknown | null>
> => {
  const data = await getRepository(RoleEntity).find({
    inactivated_date_at: IsNull(),
    inactivated_hour_at: IsNull(),
  });
  return responseOn.successOrBadRequest<RoleEntity[], null>(data, 200, null);
};

export const createPermission = async (
  name: string,
  description: string,
): Promise<ResponseApiOnSucessOrErrorType<string | null, string | unknown | null>> => {
  if (!name) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Nome necessário!');
  }
  const newPermission = {
    name,
    description,
  };
  try {
    await getRepository(PermissionEntity).save(newPermission);
  } catch (error: unknown) {
    return responseOn.error<unknown>(error);
  }

  return responseOn.successOrBadRequest<string, null>('Permissão criada!', 200, null);
};

export const updatePermission = async (
  id: string,
  name: string,
  description: string,
): Promise<ResponseApiOnSucessOrErrorType<string | null, string | unknown | null>> => {
  if (!name) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Nome necessário!');
  }
  const idNumber = Number(id);
  if (!idNumber || Number.isNaN(idNumber)) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Id inválido');
  }

  const permissionExists = await getRepository(PermissionEntity).findOne({
    where: {
      id: idNumber,
      inactivated_date_at: IsNull(),
      inactivated_hour_at: IsNull(),
    },
  });
  if (!permissionExists) return responseOn.successOrBadRequest<null, string>(null, 400, 'Permissão não encontrada!');

  try {
    await getRepository(PermissionEntity).update(
      id,
      {
        name,
        description,
      },
    );
  } catch (error) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Algo de errado ao atualizar a permissão!');
  }

  return responseOn.successOrBadRequest<string, null>('Permissão atualizada!', 200, null);
};

export const deletePermission = async (
  id: string,
): Promise<ResponseApiOnSucessOrErrorType<string | null, string | unknown | null>> => {
  const idNumber = Number(id);
  if (!idNumber || Number.isNaN(idNumber)) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Id inválido');
  }

  const permissionExists = await getRepository(PermissionEntity).findOne({
    where: {
      id: idNumber,
      inactivated_date_at: IsNull(),
      inactivated_hour_at: IsNull(),
    },
  });
  if (!permissionExists) return responseOn.successOrBadRequest<null, string>(null, 400, 'Permissão não encontrada!');
  const currentDate = new Date();
  try {
    const data = await getManager().transaction(async (transactionalEntityManager) => {
      await transactionalEntityManager.getRepository(PermissionEntity).update(
        {
          id: idNumber,
          inactivated_date_at: IsNull(),
          inactivated_hour_at: IsNull(),
        },
        {
          inactivated_date_at: currentDate,
          inactivated_hour_at: `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
        },
      );

      await transactionalEntityManager.getRepository(PersonPermissionEntity).update(
        {
          permission_id: idNumber as unknown as RoleEntity,
          deleted_at: IsNull(),
          deleted_hour: IsNull(),
        },
        {
          deleted_at: currentDate,
          deleted_hour: `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
        },
      );

      await transactionalEntityManager.getRepository(RolePermissionEntity).update(
        {
          permission_id: idNumber as unknown as RoleEntity,
          deleted_at: IsNull(),
          deleted_hour: IsNull(),
        },
        {
          deleted_at: currentDate,
          deleted_hour: `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
        },
      );

      return 'Permissão deletada!';
    });
    return responseOn.successOrBadRequest<string, null>(data, 200, null);
  } catch (error) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Algo de errado ao deletar a permissão!');
  }
};

export const permissionById = async (
  id: string,
): Promise<ResponseApiOnSucessOrErrorType<PermissionEntity | null, string | unknown | null>> => {
  const idNumber = Number(id);
  if (!idNumber || Number.isNaN(idNumber)) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Id inválido');
  }

  const data = await getRepository(PermissionEntity).findOne({
    id: idNumber,
    inactivated_date_at: IsNull(),
    inactivated_hour_at: IsNull(),
  });
  if (!data) return responseOn.successOrBadRequest<null, string>(null, 400, 'Permissão não encontrada!');

  return responseOn.successOrBadRequest<PermissionEntity, null>(data as RoleEntity, 200, null);
};

export const allPermissions = async (): Promise<
  ResponseApiOnSucessOrErrorType<PermissionEntity[] | null, string | unknown | null>
> => {
  const data = await getRepository(PermissionEntity).find({
    inactivated_date_at: IsNull(),
    inactivated_hour_at: IsNull(),
  });
  return responseOn.successOrBadRequest<PermissionEntity[], null>(data, 200, null);
};

export const linkRoleToUser = async (
  personId: string,
  roleId: string,
): Promise<ResponseApiOnSucessOrErrorType<string | null, string | unknown | null>> => {
  const personIdNumber = Number(personId);
  if (!personId || Number.isNaN(personIdNumber)) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Id da pessoa inválido!');
  }

  const roleIdNumber = Number(roleId);
  if (!roleId || Number.isNaN(roleIdNumber)) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Id da função inválido!');
  }

  const personExists = await getRepository(PeopleEntity).findOne({
    where: {
      id: personId,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    },
  });
  if (!personExists) return responseOn.successOrBadRequest<null, string>(null, 400, 'Id da pessoa inválido!');

  const roleExists = await getRepository(RoleEntity).findOne({
    where: {
      id: roleId,
      inactivated_date_at: IsNull(),
      inactivated_hour_at: IsNull(),
    },
  });
  if (!roleExists) return responseOn.successOrBadRequest<null, string>(null, 400, 'Id da função inválido!');

  const data = {
    person_id: personId as unknown as PeopleEntity,
    role_id: roleId as unknown as RoleEntity,
  };
  try {
    await getRepository(PersonRoleEntity).save(data);
  } catch (error) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Algo de errado ao atribuir função!');
  }

  return responseOn.successOrBadRequest<string, null>('Função atribuída!', 200, null);
};

export const linkRoleToPermission = async (
  roleId: string,
  permissionId: string,
): Promise<ResponseApiOnSucessOrErrorType<string | null, string | unknown | null>> => {
  const roleIdNumber = Number(roleId);
  if (!roleId || Number.isNaN(roleIdNumber)) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Id da função inválido!');
  }

  const permissionIdNumber = Number(permissionId);
  if (!permissionId || Number.isNaN(permissionIdNumber)) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Id da permissão inválido!');
  }

  const roleExists = await getRepository(RoleEntity).findOne({
    where: {
      id: roleId,
      inactivated_date_at: IsNull(),
      inactivated_hour_at: IsNull(),
    },
  });
  if (!roleExists) return responseOn.successOrBadRequest<null, string>(null, 400, 'Id da função inválido!');

  const permissionExists = await getRepository(PermissionEntity).findOne({
    where: {
      id: permissionId,
      inactivated_date_at: IsNull(),
      inactivated_hour_at: IsNull(),
    },
  });
  if (!permissionExists) return responseOn.successOrBadRequest<null, string>(null, 400, 'Id da permissão inválido!');

  const data = {
    role_id: roleId as unknown as RoleEntity,
    permission_id: permissionId as unknown as PermissionEntity,
  };
  try {
    await getRepository(RolePermissionEntity).save(data);
  } catch (error) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Algo de errado ao atribuir!');
  }

  return responseOn.successOrBadRequest<string, null>('Atribuída!', 200, null);
};

export const linkPermissionToUser = async (
  personId: string,
  permissionId: string,
): Promise<ResponseApiOnSucessOrErrorType<string | null, string | unknown | null>> => {
  const personIdNumber = Number(personId);
  if (!personId || Number.isNaN(personIdNumber)) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Id da pessoa inválido!');
  }

  const permissionIdNumber = Number(permissionId);
  if (!permissionId || Number.isNaN(permissionIdNumber)) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Id da permissão inválido!');
  }

  const personExists = await getRepository(PeopleEntity).findOne({
    where: {
      id: personId,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    },
  });
  if (!personExists) return responseOn.successOrBadRequest<null, string>(null, 400, 'Id da pessoa inválido!');

  const permissionExists = await getRepository(PermissionEntity).findOne({
    where: {
      id: permissionId,
      inactivated_date_at: IsNull(),
      inactivated_hour_at: IsNull(),
    },
  });
  if (!permissionExists) return responseOn.successOrBadRequest<null, string>(null, 400, 'Id da permissão inválido!');

  const data = {
    person_id: personId as unknown as PeopleEntity,
    permission_id: permissionId as unknown as RoleEntity,
  };
  try {
    await getRepository(PersonPermissionEntity).save(data);
  } catch (error) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Algo de errado ao atribuir!');
  }

  return responseOn.successOrBadRequest<string, null>('Atribuída!', 200, null);
};
