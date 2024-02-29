import { Request, Response } from 'express';
import {
  refreshToken,
  validationTokenToResetPassword,
  setPassword,
  appMobileIntegration,
  sign,
  changeEmail,
} from '../repository/auth/auth';
import Auth from '../repository/auth';

export class AuthController {
  public async sign(req: Request, res: Response) {
    const { codeHttp, ...response } = await sign(req.body);
    return res.status(codeHttp).json(response);
  }

  public async refreshToken(req: Request, res: Response) {
    const token = req.headers.authorization;
    const { codeHttp, ...response } = await refreshToken(token);

    return res.status(codeHttp).json(response);
  }

  public async resetPassword(req: Request, res: Response) {
    const { email } = req.body;
    const { codeHttp, ...response } = await new Auth().resetPassword(email);

    return res.status(codeHttp).json(response);
  }

  public async validationTokenToResetPassword(req: Request, res: Response) {
    const token = req.headers.authorization;
    const { codeHttp, ...response } = await validationTokenToResetPassword(token);

    return res.status(codeHttp).json(response);
  }

  public async setPassword(req: Request, res: Response) {
    const { password, token } = req.body;
    const { codeHttp, ...response } = await setPassword({ password, token });

    return res.status(codeHttp).json(response);
  }

  public async appMobileIntegration(req: Request, res: Response) {
    const { token } = req.body;
    const { codeHttp, ...response } = await appMobileIntegration(token.toString());

    return res.status(codeHttp).json(response);
  }

  async setEmail(request: Request, response: Response) {
    const { token } = request.body;
    const { codeHttp, ...rest } = await changeEmail(token.toString());
    return response.status(codeHttp).json(rest);
  }
}
