import type { Language } from '../enums';

import { isLanguage } from './isLanguage';

export const detectBrowserLanguage = (): Language | null => {
  const browserLang = navigator.language.split('-')[0];

  return isLanguage(browserLang) ? browserLang : null;
};
