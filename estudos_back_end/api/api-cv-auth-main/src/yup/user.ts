import * as yup from 'yup';

const validation = {
  setUserValidation: yup.object().shape({
    name: yup.string().max(150, 'Nome inválido')
      .required('Campo de nome deve ser preenchido').nullable(false),
    email: yup.string()
      .email('E-mail inválido')
      .max(80, 'E-mail inválido')
      .required('Campo de E-mail deve ser preenchido')
      .nullable(false),
    telephone: yup.number().required('Campo de telefone deve ser preenchido').nullable(false),
    address: yup.string()
      .max(120, 'Endereço deve ter até 120 caracteres')
      .required('Campo de endereço deve ser preenchido').nullable(false),
    zip_code: yup.number().required('Campo de CEP deve ser preenchido').nullable(false),
    state_local: yup
      .string()
      .max(120, 'Localidade deve ter até 120 caracteres')
      .required('Campo de Estado/Município deve ser preenchido').nullable(false),
    district: yup
      .string()
      .max(120, 'Cidade deve ter até 120 caracteres')
      .required('Campo de cidade deve ser preenchido').nullable(false),
  }),
};

export default validation;
