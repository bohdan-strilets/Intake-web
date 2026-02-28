import type { TFunction } from '@shared/i18n';
import type { SelectOption } from '@shared/ui/controls/Select';

import { ACTIVITY_LEVEL, type ActivityLevel } from '../enums';
import { activityLabelMap } from '../mappers';

export const createActivityLevelOptions = (
  t: TFunction<'user'>,
): SelectOption<ActivityLevel>[] =>
  Object.values(ACTIVITY_LEVEL).map((value) => {
    const key = activityLabelMap(value);
    return {
      value,
      label: t(`activityLevels.${key}`),
      helperText: t('helpers.activityLevel'),
      description: t(`activityLevelDescriptions.${key}`),
      isDisabled: false,
    };
  });
