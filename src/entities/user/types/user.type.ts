import type { Goal, Sex } from '../enums';

export type User = {
  id: string;
  email: string;
  name: string;
  sex: Sex;
  age: number;
  height: number;
  weight: number;
  goal: Goal;
};
