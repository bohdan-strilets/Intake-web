import type { Language } from '@entities/user';

import { isLanguage } from './isLanguage';

const toBaseLang = (locale: string): string => locale.split('-')[0].toLowerCase();

/**
 * Detects user's preferred language from device/browser.
 * Uses navigator.languages (priority list) first, then navigator.language,
 * so the user gets their language on first visit.
 */
export const detectBrowserLanguage = (): Language | null => {
  const candidates =
    typeof navigator.languages !== 'undefined' && navigator.languages.length > 0
      ? [...navigator.languages]
      : [navigator.language];

  for (const locale of candidates) {
    const base = toBaseLang(locale);
    if (isLanguage(base)) return base;
  }

  const fallback = toBaseLang(navigator.language);
  return isLanguage(fallback) ? fallback : null;
};
