import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';
import zhTranslations from './locales/zh.json';
import koTranslations from './locales/ko.json';
import jaTranslations from './locales/ja.json';
import esTranslations from './locales/es.json';

const resources = {
  en: { translation: enTranslations },
  fr: { translation: frTranslations },
  zh: { translation: zhTranslations },
  ko: { translation: koTranslations },
  ja: { translation: jaTranslations },
  es: { translation: esTranslations },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
