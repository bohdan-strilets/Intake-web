import type { ActivityLevel, Goal, Sex } from '@entities/user/enums';

export type ApiDto = {
  name: string;
  email: string;
  password: string;

  sex: Sex;
  age: number;

  height: number;
  weight: number;

  goal: Goal;
  activityLevel: ActivityLevel;
};
