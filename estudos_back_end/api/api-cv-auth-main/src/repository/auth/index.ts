import jwt from 'jsonwebtoken';
import { getRepository, IsNull } from 'typeorm';
import ResponseOnSucessOrError from '../../config/utils/response';
import validation from '../../yup/auth';
import { PeopleEntity } from '../../entity/people';
import { IAuthDto } from './auth.interface';
import Email from '../../service/email';

export default class Auth implements IAuthDto {
  private response = new ResponseOnSucessOrError();

  private email = new Email();

  async resetPassword(email: string) {
    if (!email) {
      return this
        .response
        .successOrBadRequest<null, string>(null, 401, 'Erro ao enviar email');
    }

    const peopleRepository = getRepository(PeopleEntity);

    try {
      await validation.emailResetPassword.validate(
        { email },
        { abortEarly: true },
      );
    } catch (error) {
      return this
        .response
        .successOrBadRequest<null, string>(null, 401, 'E-mail inválido');
    }

    const person = await peopleRepository.findOne({
      email,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    });

    if (!person?.email) {
      return this
        .response
        .successOrBadRequest<null, string>(null, 404, 'E-mail não encontrado no sistema');
    }

    const secretResetPassword = process.env.SECRET_RESET_PASSWORD;
    const expiresInToken = process.env.EXPIRES_IN_TOKEN_RESET_PASSWORD;

    try {
      const token = jwt.sign(
        {
          peopleId: person.id,
          isResetTokenPasswword: true,
        },
        secretResetPassword,
        {
          expiresIn: expiresInToken,
        },
      );

      const [firstName, secondName] = person.name.split(' ');
      const data = {
        url: `${process.env.URL_FRONTEND}/auth/reset-password?token=${token}`,
        name: `${firstName || ''} ${secondName || ''}`,
      };

      await this.email.send({ data, email: person.email, templateName: 'reset_password' });
      return this
        .response
        .successOrBadRequest<string, null>('Enviamos um e-mail com link para redefinir sua senha', 200, null);
    } catch (error) {
      return this
        .response
        .error<unknown>(error);
    }
  }
}
