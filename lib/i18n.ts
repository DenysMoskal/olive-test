import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const enTranslations = {
  mui_test: 'MUI Test Page',
  click_me: 'Click me',
  outlined: 'Outlined',
  about: 'About',
  language: 'Language',
};

const heTranslations = {
  mui_test: 'עמוד בדיקת MUI',
  click_me: 'לחץ עליי',
  outlined: 'מתאר',
  about: 'אודות',
  language: 'שפה',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      he: {
        translation: heTranslations,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
