import { STORAGE_KEYS } from '@shared/config/storageKeys';

import { type Language } from '../enums';

import { isLanguage } from './isLanguage';

export const getStoredLanguage = (): Language | null => {
  const stored = localStorage.getItem(STORAGE_KEYS.LANGUAGE);

  if (!stored) return null;

  return isLanguage(stored) ? stored : null;
};

export const setStoredLanguage = (lang: Language): void => {
  localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
};
