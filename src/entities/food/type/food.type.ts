import type { FoodIcon } from '../enums';

export type Food = {
  id: string;

  title: string;
  icon: FoodIcon;

  weight: number;

  calories: number;
  protein: number;
  fat: number;
  carbs: number;
};
