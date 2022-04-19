import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en/translation.json';
import translationRu from './locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEn
  },
  ru: {
    translation: translationRu
  }
};

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    compatibilityJSON: 'v3',
    resources,
    interpolation: {
      escapeValue: false,
    },
    // react: {
    //   useSuspense: false,
    // }
  },
  );

export default i18next;
