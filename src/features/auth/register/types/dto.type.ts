import type { ActivityLevel, Goal, Sex } from '@entities/user/enums';

export type ApiDto = {
  name: string;
  email: string;
  password: string;

  sex: Sex;
  dateOfBirth: string;

  height: number;
  weight: number;

  goal: Goal;
  activityLevel: ActivityLevel;
};
