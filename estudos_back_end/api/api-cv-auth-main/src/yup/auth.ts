import * as yup from 'yup';

const validation = {
  authSchema: yup.object().shape({
    email: yup.string().required('E-mail inválidas').email('Email inválidas'),
    password: yup.string().required('Senha inválidas'),
  }),

  emailResetPassword: yup.object().shape({
    email: yup.string().required('E-mail inválidas').email('Email inválidas'),
  }),

  setPasswordReset: yup.object().shape({
    password: yup
      .string()
      .required('O campo de senha é obrigatório')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/,
        'Sua senha deve conter no mínimo 8 caracteres, um número, uma letra maiúscula, uma letra minúscula e um caractere especial',
      ),
  }),
};

export default validation;
