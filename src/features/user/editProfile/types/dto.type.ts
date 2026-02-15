import type { ActivityLevel, Goal, Sex } from '@entities/user';

export type ApiDto = {
  name?: string;
  sex?: Sex;
  age?: number;
  height?: number;
  weight?: number;
  targetWeight?: number | null;
  goal?: Goal;
  goalDelta?: number | null;
  activityLevel?: ActivityLevel;
};
