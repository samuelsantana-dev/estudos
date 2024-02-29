import nodemailer from 'nodemailer';
import { getManager, IsNull } from 'typeorm';
import ResponseOnSucessOrError from '../../config/utils/response';
import { ResponseApiOnSucessOrErrorType } from '../../types/response_type';
import { PeopleEntity } from '../../entity/people';

const responseOn = new ResponseOnSucessOrError();
export const supportEmail = async (
  id: number,
  text: string,
): Promise<ResponseApiOnSucessOrErrorType<string | null, string | unknown | null>> => {
  const entityManager = getManager();

  const user = await entityManager.findOne(PeopleEntity, {
    where: {
      id,
      deleted_at: IsNull(),
      deleted_hour: IsNull(),
    },
    select: ['email'],
  });

  if (!text) {
    return responseOn.successOrBadRequest<null, string>(null, 400, 'Texto vazio');
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST_ACCESS_EMAIL,
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER_EMAIL_ACCESS_KEY,
        pass: process.env.PASS_ACCESS_KEY,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_NO_REPLY,
      to: process.env.EMAIL_SUPPORT,
      subject: `${user?.email} | Circuito da Visão`,
      text,
      html: '',
    });

    return responseOn.successOrBadRequest<string, null>('Enviamos um ticket para o suporte', 200, null);
  } catch (error) {
    return responseOn.error<unknown>(error);
  }
};
