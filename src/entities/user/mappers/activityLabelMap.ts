import { ACTIVITY_LEVEL, type ActivityLevel } from '@entities/user/enums';

export const activityLabelMap: Record<ActivityLevel, string> = {
  [ACTIVITY_LEVEL.SEDENTARY]: 'Sedentary',
  [ACTIVITY_LEVEL.LIGHT]: 'Light activity',
  [ACTIVITY_LEVEL.MODERATE]: 'Moderate activity',
  [ACTIVITY_LEVEL.HIGH]: 'High activity',
  [ACTIVITY_LEVEL.VERY_HIGH]: 'Very high activity',
};
