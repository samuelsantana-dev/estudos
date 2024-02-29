/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import { authMiddleware } from '../repository/auth/auth';

class Middleware {
  async auth(req: Request, res: Response, next: NextFunction): Promise<void | any> {
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .json({ status: false, data: null, error: 'token não fornecido' });
    }

    const parts = token.split(' ');

    if (parts.length !== 2) {
      return res.status(401).json({
        status: false,
        data: {
          partsLenght: parts.length,
          parts,
        },
        error: 'Token error',
      });
    }

    const [scheme, tokenHash] = parts;

    if (scheme !== 'Bearer') {
      return res
        .status(401)
        .send({ status: false, data: null, error: 'Token malformado' });
    }

    const response = await authMiddleware(tokenHash);

    if (!response.isValidToken || !response.peopleId) {
      return res.status(401).json({
        status: false,
        data: null,
        error: 'Faça login para acessar sua conta',
      });
    }

    req.userId = response.peopleId;

    next();
  }
}

export default Middleware;
