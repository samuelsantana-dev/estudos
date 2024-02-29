import { PeopleEntity } from '../../entity/people';
import { PrivacyEntity } from '../../entity/privacy';
import { ResponseApiOnSucessOrErrorType } from '../../types/response_type';

export interface IPrivacyTermsDto {
  personId: number;
  wasAccepted: boolean;
}

export interface RolesResponse {
  roles: string[]
}

export interface IPersonInfo extends PeopleEntity {
  entityName: string | undefined | null;
  church: {
    name: string | undefined;
    group_id: number | undefined;
  }
}

export interface IUser {
  acceptPrivacyTerms(req: IPrivacyTermsDto): Promise<
    ResponseApiOnSucessOrErrorType<string | null, string | null | unknown>
  >

  findPrivacyTerms(): Promise<
    ResponseApiOnSucessOrErrorType<PrivacyEntity | null, string | null | unknown>
  >

  getRoles(id: string): Promise<ResponseApiOnSucessOrErrorType<
    RolesResponse | null, string | unknown | null>
  >

  findOne(
    id: number,
    profileId: number,
  ): Promise<
    ResponseApiOnSucessOrErrorType<IPersonInfo | null, string | null | unknown>
  >
}
