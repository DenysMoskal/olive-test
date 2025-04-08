import * as yup from 'yup';
import i18next from 'i18next';

export const registerSchema = yup.object({
  firstName: yup.string().required(i18next.t('validation.firstNameRequired')),
  lastName: yup.string().required(i18next.t('validation.lastNameRequired')),
  email: yup
    .string()
    .email(i18next.t('validation.emailInvalid'))
    .required(i18next.t('validation.emailRequired')),
  password: yup
    .string()
    .min(6, i18next.t('validation.passwordMinLength'))
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      i18next.t('validation.passwordRequirements')
    )
    .required(i18next.t('validation.passwordRequired')),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], i18next.t('validation.passwordsMatch'))
    .required(i18next.t('validation.confirmPasswordRequired')),
});

export type RegisterFormData = yup.InferType<typeof registerSchema>;
