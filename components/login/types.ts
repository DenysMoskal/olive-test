import * as yup from 'yup';
import i18next from 'i18next';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email(i18next.t('validation.emailInvalid'))
    .required(i18next.t('validation.emailRequired')),
  password: yup
    .string()
    .min(6, i18next.t('validation.passwordMinLength'))
    .required(i18next.t('validation.passwordRequired')),
});

export type FormData = yup.InferType<typeof loginSchema>;
