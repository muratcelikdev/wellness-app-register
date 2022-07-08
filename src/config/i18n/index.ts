import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from 'config/i18n/translations/en.json';

export enum Langauge {
  English = 'en',
}

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
  },
  lng: Langauge.English,
  fallbackLng: Langauge.English,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
