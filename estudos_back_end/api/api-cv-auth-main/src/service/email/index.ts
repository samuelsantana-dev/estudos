import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import ResponseOnSucessOrError from '../../config/utils/response';
import { IEmailDto } from './email.interface';

export default class Email {
  private response = new ResponseOnSucessOrError();

  async send<Data>({ email, templateName, data }: IEmailDto<Data>): Promise<void> {
    try {
      const nodeEnv = process.env.NODE_ENV;
      const pathDevOrProd = path.join(__dirname, '..', '..', '..', '..', 'public', 'template', `${templateName}.hbs`);
      const pathLocal = path.join(__dirname, '..', '..', '..', 'public', 'template', `${templateName}.hbs`);
      const templateSource = fs.readFileSync(nodeEnv === 'local' ? pathLocal : pathDevOrProd, 'utf8');

      const template = Handlebars.compile(templateSource);
      const htmlToSend = template(data);

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
        to: email,
        subject: 'Redefinição de senha | Circuito da Visão',
        text: 'Redefinição de senha',
        html: htmlToSend,
      });
    } catch (error) {
      throw error;
    }
  }
}
