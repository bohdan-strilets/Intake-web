import { ACTIVITY_LEVEL } from '../enums';
import type { ActivityLevel } from '../enums';

export const activityLabelMap = (activityLevel: ActivityLevel) => {
  switch (activityLevel) {
    case ACTIVITY_LEVEL.SEDENTARY:
      return 'sedentary';
    case ACTIVITY_LEVEL.LIGHT:
      return 'light';
    case ACTIVITY_LEVEL.MODERATE:
      return 'moderate';
    case ACTIVITY_LEVEL.HIGH:
      return 'high';
    case ACTIVITY_LEVEL.VERY_HIGH:
      return 'veryHigh';
    default:
      throw new Error('Unknown activity level');
  }
};
