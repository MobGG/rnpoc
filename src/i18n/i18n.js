import I18n from 'react-native-i18n';
import en from './locales/en';
import th from './locales/th';

I18n.fallbacks = true;

I18n.translations = {
  en,
  th
};
I18n.locale = 'en';

export const langList = [
  { key: 'th', language: 'ภาษาไทย' },
  { key: 'en', language: 'English' }
];

export const switchLanguage = (lang, component) => {
  // console.log('lang', lang);
  // console.log('this', component);
  I18n.locale = lang;
  component.forceUpdate();
};

export default I18n;