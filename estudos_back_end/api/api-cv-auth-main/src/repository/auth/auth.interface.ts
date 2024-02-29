import { HierarchyEntity } from '../../entity/hierarchy';
import { PeopleEntity } from '../../entity/people';
import { PrivacyEntity } from '../../entity/privacy';
import { ResponseApiOnSucessOrErrorType } from '../../types/response_type';

interface IPrivacy extends PrivacyEntity {
  wasAccepted: boolean;
}

export interface ResponseLogin {
  token: string;
  refresh_token: string;
  user: PeopleEntity | null;
  hierarchy: HierarchyEntity | null;
  privacy: {
    wasAccepted: boolean;
    policies: string | null;
  };
}

export interface BodyLoginType {
  email: string;
  password: string;
}

export interface IAuthDto {
  resetPassword(email: string): Promise<
    ResponseApiOnSucessOrErrorType<string | null, string | unknown>
  >
}
