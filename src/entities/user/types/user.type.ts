import type { ActivityLevel, Goal, Sex } from '../enums';

import type { Metabolism } from './metabolism.type';

export type User = {
  id: string;

  email: string;
  name: string;

  sex: Sex;
  age: number;

  height: number;
  weight: number;
  targetWeight?: number;

  goal: Goal;
  goalDelta?: number;
  activityLevel: ActivityLevel;

  metabolism: Metabolism;
};
