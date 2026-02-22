import type { TFunction } from '@shared/i18n';

import type { SelectOption } from '../../Select';

const MONTH_INDEXES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;

export const createMonthOptions = (
  t: TFunction<'calendar'>,
): SelectOption<string>[] =>
  MONTH_INDEXES.map((index) => ({
    value: String(index),
    label: t(`months.${index}`),
    isDisabled: false,
  }));
