import type { Language } from '@entities/user';

import i18n from '@shared/i18n';

import { intlLocaleMap } from '../locale';

export const formatDisplayDate = (
  date: string,
  showYear: boolean = false,
): string => {
  const lang = i18n.language as Language;
  const locale = intlLocaleMap[lang] ?? 'en-US';

  return new Date(date).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: showYear ? 'numeric' : undefined,
  });
};
