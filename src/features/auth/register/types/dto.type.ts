import type { ActivityLevel, Goal, Sex } from '@entities/user/enums';

export type ApiDto = {
  name: string;
  email: string;
  password: string;

  sex: Sex;
  dateOfBirth: string;

  height: number;
  weight: number;
  targetWeight?: number | null;

  goal: Goal;
  goalDelta?: number | null;
  activityLevel: ActivityLevel;
};
