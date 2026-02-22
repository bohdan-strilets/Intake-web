import type { TFunction } from '@shared/i18n';
import type { SelectOption } from '@shared/ui/controls/Select';

import { GOAL, type Goal } from '../enums';

export const createGoalOptions = (t: TFunction<'user'>): SelectOption<Goal>[] =>
  Object.values(GOAL).map((value) => ({
    value,
    label: t(`goals.${value}`),
    isDisabled: false,
  }));
