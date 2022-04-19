import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18n from 'react-native-i18n';
import { getLanguages } from 'react-native-i18n';
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
I18n.fallbacks = true;

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: I18n.locale,
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    }
  });

export default I18n;
