export interface IEmailDto<Data> {
  email: string;
  templateName: string;
  data: Data;
}
