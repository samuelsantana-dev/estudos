import { Request, Response } from 'express';
import {
  supportEmail,
} from '../repository/utils/suport';

export default class SuportController {
  public async supportEmail(req: Request, res: Response) {
    const { text } = req.body;
    const { codeHttp, ...response } = await supportEmail(req.userId, text);

    return res.status(codeHttp).json(response);
  }
}
