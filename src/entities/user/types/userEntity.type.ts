import type { ActivityLevel, Goal, Sex } from '../enums';

import type { Metabolism } from './metabolism.type';
import type { UserSettings } from './userSettings';

export type UserEntity = {
  id: string;

  email: string;
  name: string;

  sex: Sex;
  dateOfBirth: string;
  age: number;

  height: number;
  weight: number;
  targetWeight?: number;

  goal: Goal;
  goalDelta?: number;
  activityLevel: ActivityLevel;

  metabolism: Metabolism;

  settings: UserSettings;
};
