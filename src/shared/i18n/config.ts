import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { DEFAULT_LANGUAGE } from './constants';
import { getStoredLanguage } from './model';
import en from './resources/en/common.json';
import pl from './resources/pl/common.json';
import uk from './resources/uk/common.json';

const initialLanguage = getStoredLanguage() ?? DEFAULT_LANGUAGE;

void i18n.use(initReactI18next).init({
  resources: {
    en: { common: en },
    pl: { common: pl },
    uk: { common: uk },
  },

  lng: initialLanguage,
  fallbackLng: DEFAULT_LANGUAGE,

  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
