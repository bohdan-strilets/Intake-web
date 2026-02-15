import { activityLabelMap } from '@entities/user/mappers';

import type { SelectOption } from '@shared/ui/controls/Select';

import { ACTIVITY_LEVEL, type ActivityLevel } from '../enums';

export const activityLevelOptions: SelectOption<ActivityLevel>[] = [
  {
    value: ACTIVITY_LEVEL.SEDENTARY,
    label: activityLabelMap[ACTIVITY_LEVEL.SEDENTARY],
    isDisabled: false,
  },
  {
    value: ACTIVITY_LEVEL.LIGHT,
    label: activityLabelMap[ACTIVITY_LEVEL.LIGHT],
    isDisabled: false,
  },
  {
    value: ACTIVITY_LEVEL.MODERATE,
    label: activityLabelMap[ACTIVITY_LEVEL.MODERATE],
    isDisabled: false,
  },
  {
    value: ACTIVITY_LEVEL.HIGH,
    label: activityLabelMap[ACTIVITY_LEVEL.HIGH],
    isDisabled: false,
  },
  {
    value: ACTIVITY_LEVEL.VERY_HIGH,
    label: activityLabelMap[ACTIVITY_LEVEL.VERY_HIGH],
    isDisabled: false,
  },
];
