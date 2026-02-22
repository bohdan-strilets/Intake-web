import type { Language } from '@entities/user';

import i18n from '@shared/i18n';

import { intlLocaleMap } from '../locale';

export const formatMonthLabel = (year: number, month: number): string => {
  const lang = i18n.language as Language;
  const locale = intlLocaleMap[lang] ?? 'en-US';

  return new Date(year, month).toLocaleDateString(locale, {
    month: 'long',
    year: 'numeric',
  });
};
