import type { Language } from '@entities/user';

import i18n from '@shared/i18n';

import { intlLocaleMap } from '../locale';

export const formatShortWeekday = (date: string): string => {
  const lang = i18n.language as Language;
  const locale = intlLocaleMap[lang] ?? 'en-US';

  return new Date(date).toLocaleDateString(locale, {
    weekday: 'short',
  });
};
