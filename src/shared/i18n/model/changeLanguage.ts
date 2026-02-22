import type { Language } from '@entities/user';

import i18n from '../config';

import { setStoredLanguage } from './languageStorage';

export const changeLanguage = async (lang: Language): Promise<void> => {
  if (i18n.language === lang) return;

  await i18n.changeLanguage(lang);
  setStoredLanguage(lang);
};
