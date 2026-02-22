import type { TFunction } from '@shared/i18n';
import type { SelectOption } from '@shared/ui/controls/Select';

import { SEX, type Sex } from '../enums';

export const createSexOptions = (t: TFunction<'user'>): SelectOption<Sex>[] =>
  Object.values(SEX).map((value) => ({
    value,
    label: t(`sex.${value}`),
    isDisabled: false,
  }));
