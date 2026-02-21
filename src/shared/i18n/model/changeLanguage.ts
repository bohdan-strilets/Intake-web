import i18n from '../config';
import type { Language } from '../enums';

import { setStoredLanguage } from './languageStorage';

export const changeLanguage = async (lang: Language): Promise<void> => {
  if (i18n.language === lang) return;

  await i18n.changeLanguage(lang);
  setStoredLanguage(lang);
};
