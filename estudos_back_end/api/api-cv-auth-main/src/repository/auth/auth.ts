import jwt from 'jsonwebtoken';
import axios from 'axios';
import bcrypt from 'bcrypt';
import { getRepository, IsNull, createQueryBuilder } from 'typeorm';
import validation from '../../yup/auth';
import ResponseOnSucessOrError from '../../config/utils/response';
import { ResponseApiOnSucessOrErrorType } from '../../types/response_type';
import { PersonFactFinancialAcessEntity } from '../../entity/person_fact_financial_access';
import { FactFinancialAcessEntity } from '../../entity/fact_financial_acess';
import { PeopleEntity } from '../../entity/people';
import { PeopleHierarchyEntity } from '../../entity/people_hierarchy';
import { HierarchyEntity } from '../../entity/hierarchy';
import { ResponsibleGroupEntity } from '../../entity/responsible_group';
import GroupUtilsFunctions from '../../config/utils/global_functions';
import { PersonPrivacyEntity } from '../../entity/person_privacy';
import { HierarchyTypes } from '../../types/hierarchy.enum';
// import { saraIdProvider } from '../../providers/SaraIdProvider';
import { EntityTableEntity } from '../../entity/entity';

export interface BodyLoginType {
  email: string;
  password: string;
}

export interface ResponseLogin {
  token: string;
  refresh_token: string;
  user: PeopleEntity | undefined;
  hierarchy: HierarchyEntity | null;
  privacy: {
    wasAccepted?: boolean;
    policies?: string | null;
    message?: string;
  };
  church: number | null;
  isFromDf: boolean;
  secretary_pd: {
    type: string | undefined;
    secretary_id: number | undefined;
    entity_id: number | undefined;
  }
}

interface ResponseRefreshToken {
  accessToken: string;
  refreshToken: string;
}

export interface ContentPasswordType {
  token: string;
  password: string;
}

export interface AuthMiddlewaretType {
  isValidToken: boolean;
  peopleId: number | null;
}

interface SignPayload {
  peopleId: number;
  isResetTokenPasswword: boolean;
  isRefreshToken: boolean;
}

interface TokenResetPasswordPayload {
  peopleId: number;
  isResetTokenPasswword: boolean;
  isRefreshToken: boolean;
}

interface ErrorMessage {
  message: string;
}

interface TokenEmailChangePayload {
  peopleId: number;
  newEmail: string;
  isResetTokenEmail: boolean;
  isRefreshToken: boolean;
  exp: number;
}

const responseOn = new ResponseOnSucessOrError();

export const sign = async (body: BodyLoginType)
  : Promise<ResponseApiOnSucessOrErrorType<
    ResponseLogin | null, string | null | unknown>> => {
  const groupUtilsFunctions = new GroupUtilsFunctions();
  const userRepository = getRepository(PeopleEntity);
  const peopleHierarchyRepository = getRepository(PeopleHierarchyEntity);

  try {
    await validation.authSchema.validate(body, { abortEarly: true });
  } catch {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Crendenciais inválidas');
  }

  const credentials = await userRepository.findOne({
    where: {
      email: body.email,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    },
    select: ['password'],
  });

  if (!credentials?.password || credentials === undefined) return responseOn.successOrBadRequest<null, string>(null, 401, 'Crendenciais inválidas');
  const match = await bcrypt.compareSync(body.password, credentials.password.replace('$2y$', '$2b$'));
  if (!match) return responseOn.successOrBadRequest<null, string>(null, 400, 'Crendenciais inválidas');

  // const code = await saraIdProvider().login(body.email, body.password);
  // if (!code) {
  //   return responseOn.successOrBadRequest<null, string>(null, 400, 'Crendenciais inválidas');
  // }
  // const saraIdUser = await saraIdProvider().authorization(code);
  // if (!saraIdUser) {
  //   return responseOn.successOrBadRequest<null, string>(null,
  //     400,
  //     'Usuario não encontrado no Sara Id');
  // }

  const secret = process.env.SECRET_KEY_PIPETECH.toString();
  const refreshSecret = process.env.SECRET_KEY_PIPETECH_TOKEN_LIFE.toString();
  const expiresInToken = process.env.EXPIRES_IN_TOKEN.toString();
  const expiresInTokenRefresh = process.env.EXPIRES_IN_TOKEN_REFRESH.toString();
  const user = await userRepository.findOne({ email: body.email, deleted_at: IsNull() });
  if (!user) return responseOn.successOrBadRequest<null, string>(null, 400, 'Usuário não encontrado');
  const hierarchy = await peopleHierarchyRepository.findOne({
    where: {
      person_id: {
        id: user?.id,
        deleted_at: IsNull(),
        deleted_hour: IsNull(),
      },
    },
    relations: ['hierarchy_id'],
    order: {
      hierarchy_id: 'ASC',
    },
  });
  const secretaryPeople = await createQueryBuilder()
    .select([
      'person_fact_financial_acess.id AS id',
      'person_fact_financial_acess.grupo_id AS group_id',
      'people.id AS people_id',
      'people.nome AS name',
      'fact_financial_acess.id AS secretary_id',
      'fact_financial_acess.nome AS secretary_name',
      'person_fact_financial_acess.data_criacao AS create_at',
      'person_fact_financial_acess.data_inativacao AS delete_at',
    ])
    .from(PersonFactFinancialAcessEntity, 'person_fact_financial_acess')
    .innerJoin(FactFinancialAcessEntity,
      'fact_financial_acess',
      'fact_financial_acess.id = person_fact_financial_acess.fact_financial_acess_id')
    .innerJoin(PeopleEntity, 'people', 'people.id = person_fact_financial_acess.pessoa_id')
    .where(`person_fact_financial_acess.pessoa_id = ${user?.id}`)
    .andWhere('person_fact_financial_acess.data_inativacao IS NULL')
    .orderBy('people.nome', 'ASC')
    .execute();

  const profileGroups = await createQueryBuilder()
    .select([
      'entity.grupo_id',
      'entity.tipo_id',
    ])
    .from(PeopleEntity, 'people')
    .innerJoin(ResponsibleGroupEntity, 'responsible_group', 'people.id = responsible_group.pessoa_id')
    .innerJoin(EntityTableEntity, 'entity', 'entity.grupo_id = responsible_group.grupo_id')
    .where(`people.id = ${user?.id}`)
    .andWhere('people.data_inativacao IS NULL')
    .andWhere('responsible_group.data_inativacao IS NULL')
    .andWhere('entity.data_inativacao IS NULL')
    .orderBy('entity.tipo_id', 'DESC')
    .execute();

  const church = profileGroups[0]?.tipo_id <= HierarchyTypes.CHURCH
    ? profileGroups[0]?.grupo_id
    : await groupUtilsFunctions.getUserChurch(user?.id);

  const isFromDf = await groupUtilsFunctions.checkIfIsFromDF(church!);

  try {
    const tokenUser: string = jwt.sign({
      peopleId: user?.id,
      isRefreshToken: false,
    }, secret, { expiresIn: expiresInToken });

    const refreshtoken = jwt.sign({
      peopleId: user?.id,
      isRefreshToken: true,
    }, refreshSecret, { expiresIn: expiresInTokenRefresh });

    const privacyInfo = await getRepository(PersonPrivacyEntity).findOne({
      where: {
        person: user,
        deleted_at: IsNull(),
      },
      relations: ['person', 'privacy'],
    });

    if (privacyInfo !== undefined) {
      return responseOn.successOrBadRequest<ResponseLogin, null>({
        token: tokenUser,
        refresh_token: refreshtoken,
        user,
        privacy: {
          policies: privacyInfo?.privacy?.policies,
          wasAccepted: privacyInfo?.wasAccepted,
        },
        hierarchy: hierarchy?.hierarchy_id ?? null,
        church,
        isFromDf,
        secretary_pd: {
          type: secretaryPeople[0].type,
          secretary_id: secretaryPeople[0].secretary_id,
          entity_id: secretaryPeople[0].group_id,
        },
      }, 200, null);
    }
    return responseOn.successOrBadRequest<ResponseLogin, null>({
      token: tokenUser,
      refresh_token: refreshtoken,
      user,
      privacy: {
        message: 'Utilizamos cookies essenciais e tecnologias semelhantes de acordo com a nossa Política de Privacidade e, ao continuar navegando, você concorda com estas condições.',
      },
      hierarchy: hierarchy?.hierarchy_id ?? null,
      church,
      isFromDf,
      secretary_pd: {
        type: secretaryPeople[0]?.type,
        secretary_id: secretaryPeople[0]?.secretary_id,
        entity_id: secretaryPeople[0]?.group_id,
      },
    }, 200, null);
  } catch (error) {
    return responseOn.error<unknown>(error);
  }
};

export const refreshToken = async (
  token: string | undefined,
): Promise<ResponseApiOnSucessOrErrorType<ResponseRefreshToken | null, string | unknown>> => {
  if (!token) { return responseOn.successOrBadRequest<null, string>(null, 401, 'No token provide'); }

  const parts = token.split(' ');

  if (parts.length !== 2) { return responseOn.successOrBadRequest<null, string>(null, 401, 'Token malformmed'); }

  const [scheme, tokenHash] = parts;

  if (scheme !== 'Bearer') { return responseOn.successOrBadRequest<null, string>(null, 401, 'Token scheme malformmed'); }

  const peopleRepository = getRepository(PeopleEntity);

  try {
    const decode = jwt.verify(
      tokenHash,
      process.env.SECRET_KEY_PIPETECH_TOKEN_LIFE,
    ) as {
      peopleId: number;
      isRefreshToken: boolean;
      iat: number;
      exp: number;
    };

    if (!decode.isRefreshToken) {
      return responseOn.successOrBadRequest<null, string>(null, 400, 'Link expirado');
    }

    const people = await peopleRepository.findOne({ id: decode.peopleId });

    if (!people) { return responseOn.successOrBadRequest<null, string>(null, 400, 'Link expirado'); }

    const secret = process.env.SECRET_KEY_PIPETECH.toString();

    const newAccessToken = jwt.sign(
      {
        peopleId: decode.peopleId,
        isRefreshToken: false,
      },
      secret,
      {
        expiresIn: process.env.EXPIRES_IN_TOKEN,
      },
    );

    if (!newAccessToken) {
      return responseOn.successOrBadRequest<null, string>(null, 401, 'Access token not generated!');
    }

    const newRefreshToken = jwt.sign(
      {
        peopleId: decode.peopleId,
        isRefreshToken: true,
      },
      secret,
      {
        expiresIn: process.env.EXPIRES_IN_TOKEN_REFRESH,
      },
    );

    if (!newRefreshToken) {
      return responseOn.successOrBadRequest<null, string>(null, 401, 'Refresh token not generated!');
    }

    const finalResponse: ResponseRefreshToken = {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };

    return responseOn.successOrBadRequest<ResponseRefreshToken, null>(finalResponse, 200, null);
  } catch (error) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Link expirado');
  }
};

export const validationTokenToResetPassword = async (
  token: string | undefined,
): Promise<ResponseApiOnSucessOrErrorType<string | null, string | unknown>> => {
  if (!token) { return responseOn.successOrBadRequest<null, string>(null, 400, 'Nenhum token fornecido'); }

  const parts = token.split(' ');
  if (parts.length !== 2) { return responseOn.successOrBadRequest<null, string>(null, 400, 'Token error'); }

  const [scheme, tokenHash] = parts;
  if (scheme !== 'Bearer') { return responseOn.successOrBadRequest<null, string>(null, 400, 'Token quebrado'); }

  const peopleRepository = getRepository(PeopleEntity);
  try {
    const secretResetPassword = process.env.SECRET_RESET_PASSWORD;
    const decode = jwt.verify(
      tokenHash,
      secretResetPassword,
    ) as TokenResetPasswordPayload;

    if (!decode.isResetTokenPasswword) { return responseOn.successOrBadRequest<null, string>(null, 400, 'Link expirado'); }

    const people = await peopleRepository.findOne({
      id: decode.peopleId,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    });
    if (!people) {
      return responseOn.successOrBadRequest<null, string>(null, 400, 'Link expirado');
    }

    return responseOn.successOrBadRequest<string, null>('Esse token é valido', 200, null);
  } catch (error) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Link expirado');
  }
};

export const triggerExternalAPIPassword = async (id: number)
  : Promise<ResponseApiOnSucessOrErrorType<string | null, string | unknown>> => {
  const url = process.env.SARA_CHURCH_HOST as string;
  const peopleRepository = getRepository(PeopleEntity);

  const userInfo = await peopleRepository.findOne({
    where: {
      id,
      deleted_at: IsNull(),
    },
    select: ['email', 'password'],
  });

  try {
    const urlTokenPath = `${url}/oauth/token`;
    const response = await axios.post(urlTokenPath, {
      grant_type: 'password',
      username: process.env.SARA_CHURCH_USERNAME,
      password: process.env.SARA_CHURCH_PASSWORD,
      client_id: process.env.SARA_CHURCH_CLIENT_ID,
      client_secret: process.env.SARA_CHURCH_CLIENT_SECRET,
    });

    const config = {
      headers: {
        Authorization: `Bearer ${await response.data.access_token}`,
      },
    };

    const urlPath = `${url}/api/redefinir-senha/direto`;
    const req = await axios.post(
      urlPath,
      {
        hashed: true,
        email: userInfo?.email,
        senha: userInfo?.password,
      },
      config,
    );
    const responseMessage = await req.data;

    return responseOn.successOrBadRequest<any, null>(responseMessage, 200, null);
  } catch (err) {
    return responseOn.error<unknown>(err);
  }
};

export const setPassword = async ({
  token,
  password,
}: ContentPasswordType)
  : Promise<ResponseApiOnSucessOrErrorType<string | null, string | unknown>> => {
  if (!token) { return responseOn.successOrBadRequest<null, string>(null, 401, 'Link expirado'); }
  const peopleRepository = getRepository(PeopleEntity);

  try {
    await validation.setPasswordReset.validate({ password });
  } catch (error) {
    const data = error as ErrorMessage;
    return responseOn.successOrBadRequest<null, string>(null, 400, data.message);
  }

  const secretResetPassword = process.env.SECRET_RESET_PASSWORD;

  let decode;

  try {
    decode = jwt.verify(
      token,
      secretResetPassword,
    ) as TokenResetPasswordPayload;
  } catch (error) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Link expirado. Por favor, reenvie o email de recuperação de senha.');
  }

  if (!decode.isResetTokenPasswword) return responseOn.successOrBadRequest<null, string>(null, 400, 'Link expirado');

  try {
    const people = await peopleRepository.findOne({
      id: decode.peopleId,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    });
    if (!people) {
      return responseOn.successOrBadRequest<null, string>(null, 404, 'Dados inválidos');
    }

    if (!people.email) {
      return responseOn.successOrBadRequest<null, string>(null, 404, 'Dados inválidos');
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);

    await peopleRepository.update({
      id: decode.peopleId,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    }, { password: hash });
    await triggerExternalAPIPassword(decode.peopleId);

    // const { data: dataUser } = await saraIdProvider().getUser(people.email);

    // const sendEmail = false;

    // if (!dataUser) {
    //   await saraIdProvider().createInvite(people.email);
    //   await saraIdProvider().createUser(people.name, people.email, password, sendEmail);
    // }

    // const { data } = await saraIdProvider().createRequestPassword(people.email, sendEmail);

    // await saraIdProvider().resetPassord({
    //   id: data.id,
    //   password,
    //   email: people.email,
    // });

    return responseOn.successOrBadRequest<string, null>('Senha alterada', 200, null);
  } catch (error) {
    return responseOn.error<any>(error);
  }
};

export const authMiddleware = async (
  token: string,
): Promise<AuthMiddlewaretType> => {
  const peopleRepository = getRepository(PeopleEntity);

  try {
    const secret = process.env.SECRET_KEY_PIPETECH;
    const decode = jwt.verify(token, secret) as SignPayload;

    if (decode.isResetTokenPasswword) return { isValidToken: false, peopleId: null };
    if (decode.isRefreshToken) return { isValidToken: false, peopleId: null };
    const people = await peopleRepository.findOne({ id: decode.peopleId });
    if (!people) return { isValidToken: false, peopleId: null };

    return { isValidToken: true, peopleId: people.id };
  } catch (error) {
    return { isValidToken: false, peopleId: null };
  }
};
export const appMobileIntegration = async (
  token: string,
): Promise<any> => {
  try {
    const url = process.env.SARA_CHURCH_HOST;
    if (url === undefined) {
      return responseOn.successOrBadRequest<null, string>(null, 400, 'URL de request externa inválida');
    }

    const formatedToken = `Bearer ${token}`;

    const response = await axios.get(
      `${url}/api/usuario`,
      {
        headers: {
          Authorization: formatedToken,
        },
      },
    );
    const person = await getRepository(PeopleEntity).findOne({
      where: {
        email: response.data.data.email,
      },
    });
    if (person === undefined) {
      return responseOn.successOrBadRequest<null, string>(null, 400, 'Usuário não encontrado');
    }

    const groups = await getRepository(ResponsibleGroupEntity).find({
      where: {
        people_id: person,
        deleted_at: IsNull(),
        deleted_hour: IsNull(),
      },
    });

    const secret = process.env.SECRET_KEY_PIPETECH.toString();
    const expiresInToken = process.env.EXPIRES_IN_TOKEN.toString();
    const tokenUser = jwt.sign(
      {
        peopleId: person.id,
        isRefreshToken: false,
      },
      secret,
      { expiresIn: expiresInToken },
    );

    return responseOn.successOrBadRequest<any, null>({ person, groups, tokenUser }, 200, null);
  } catch (error: any) {
    return responseOn.error<any>(error);
  }
};

export const changeEmail = async (
  token: string | undefined,
): Promise<ResponseApiOnSucessOrErrorType<string | null, string | unknown | null>> => {
  const peopleRepository = getRepository(PeopleEntity);
  const secretChangeEmail = process.env.SECRET_CHANGE_EMAIL;
  if (!token) { return responseOn.successOrBadRequest<null, string>(null, 400, 'Nenhum token fornecido'); }

  try {
    let decode;
    try {
      decode = jwt.verify(token, secretChangeEmail) as TokenEmailChangePayload;
    } catch (error) {
      return responseOn.successOrBadRequest<null, string>(null, 400, 'Link expirado, favor enviar novamente');
    }

    if (!decode.isResetTokenEmail) {
      return responseOn.successOrBadRequest<null, string>(null, 400, 'Link de redefinição de email inválido');
    }

    const { peopleId, newEmail } = decode;

    const people = await peopleRepository.findOne({
      id: peopleId,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    });

    if (!people) {
      return responseOn.successOrBadRequest<null, string>(null, 404, 'Dados inválidos');
    }

    await peopleRepository.update({
      id: peopleId,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    }, { email: newEmail });

    return responseOn.successOrBadRequest<string, null>('Alteração de email efetivada com sucesso', 200, null);
  } catch (error: any) {
    return responseOn.error<unknown>(error);
  }
};
