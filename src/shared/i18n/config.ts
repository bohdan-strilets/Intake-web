import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { DEFAULT_LANGUAGE } from './constants';
import { getStoredLanguage } from './model';
import en from './resources/en';
import pl from './resources/pl';
import uk from './resources/uk';

const initialLanguage = getStoredLanguage() ?? DEFAULT_LANGUAGE;

void i18n.use(initReactI18next).init({
  resources: {
    en,
    pl,
    uk,
  },

  lng: initialLanguage,
  fallbackLng: DEFAULT_LANGUAGE,

  ns: [
    'common',
    'user',
    'profile',
    'auth',
    'food',
    'day',
    'calendar',
    'stats',
    'landing',
  ],
  defaultNS: 'common',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
