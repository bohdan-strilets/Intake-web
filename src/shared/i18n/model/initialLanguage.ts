import { DEFAULT_LANGUAGE } from '../constants';

import { detectBrowserLanguage } from './detectBrowserLanguage';
import { getStoredLanguage, setStoredLanguage } from './languageStorage';

export const initialLanguage = (): string => {
  const storedLanguage = getStoredLanguage();
  const browserLanguage = detectBrowserLanguage();

  const initialLanguage = storedLanguage ?? browserLanguage ?? DEFAULT_LANGUAGE;

  if (!storedLanguage) {
    setStoredLanguage(initialLanguage);
  }

  return initialLanguage;
};
