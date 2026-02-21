import { STORAGE_KEYS } from '@shared/config/storageKeys';

import { LANGUAGE, type Language } from '../enums';

const isLanguage = (value: string): value is Language => {
  return Object.values(LANGUAGE).includes(value as Language);
};

export const getStoredLanguage = (): Language | null => {
  const stored = localStorage.getItem(STORAGE_KEYS.LANGUAGE);

  if (!stored) return null;

  return isLanguage(stored) ? stored : null;
};

export const setStoredLanguage = (lang: Language): void => {
  localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
};
