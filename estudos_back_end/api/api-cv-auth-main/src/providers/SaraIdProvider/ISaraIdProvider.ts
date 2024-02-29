import { AuthPayload } from '../../types/AuthPayload';

/* eslint-disable no-unused-vars */
export type ISaraIdProvider = {
  authorization(code: string): Promise<any>;
  login(email: string, password: string): Promise<string>;
  getUser(email:string): Promise<any>;
  createRequestPassword(email:string, sendEmail:boolean): Promise<any>;
  resetPassord(authPayload:AuthPayload): Promise<any>;
  getGroups(personIds: number[]): Promise<any>;
  createUser(name:string, email:string, password:string, sendEmail:boolean): Promise<any>;
  createInvite(email:string): Promise<any>;
}
