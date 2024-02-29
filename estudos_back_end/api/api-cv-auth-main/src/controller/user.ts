import { Request, Response } from 'express';
import {
  MergeUsersInterface,
  setUser,
  mergeUsers,
  changePassword,
  getProfile,
  saveImg,
  inactivateUser,
} from '../repository/user/user';
import User from '../repository/user/index';

export class UserController {
  public async getProfile(req: Request, res: Response) {
    const { codeHttp, ...response } = await getProfile(req.userId);
    return res.status(codeHttp).json(response);
  }

  public async getUser(req: Request, res: Response) {
    const { profileId } = req.params;

    const { codeHttp, ...response } = await new User().findOne(req.userId, +profileId);
    return res.status(codeHttp).json(response);
  }

  public async setUser(req: Request, res: Response) {
    const { codeHttp, ...response } = await setUser({ id: req.userId, ...req.body });
    return res.status(codeHttp).json(response);
  }

  public async changePassword(req: Request, res: Response) {
    const { codeHttp, ...response } = await changePassword({ id: req.userId, ...req.body });
    return res.status(codeHttp).json(response);
  }

  public async mergeUser(req: Request, res: Response) {
    const userInfo: MergeUsersInterface = req.body;
    const { codeHttp, ...rest } = await mergeUsers(userInfo, req.headers.host);
    return res.status(codeHttp).json(rest);
  }

  public async saveImg(req: Request, res: Response) {
    const { id } = req.body;
    const image = req.file;
    const { codeHttp, ...rest } = await saveImg(id, image);
    return res.status(codeHttp).json(rest);
  }

  public async roles(req: Request, res: Response) {
    const { id } = req.params;
    const { codeHttp, ...rest } = await new User().getRoles(id);
    return res.status(codeHttp).json(rest);
  }

  public static async createPrivacyTerm(req: Request, res: Response) {
    const { policy } = req.body;
    const { codeHttp, ...rest } = await new User().createPrivacyTerms(policy);
    return res.status(codeHttp).json(rest);
  }

  public static async acceptPrivacyTerms(req: Request, res: Response) {
    const { codeHttp, ...rest } = await new User().acceptPrivacyTerms(req.body);
    return res.status(codeHttp).json(rest);
  }

  public static async findPrivacyTerms(_req: Request, res: Response) {
    const { codeHttp, ...rest } = await new User().findPrivacyTerms();
    return res.status(codeHttp).json(rest);
  }

  public async inactivateUser(req: Request, res: Response) {
    const { codeHttp, ...response } = await inactivateUser(req.params.userId);

    return res.status(codeHttp).json(response);
  }
}
