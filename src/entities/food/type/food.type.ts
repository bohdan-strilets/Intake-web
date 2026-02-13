import type { FoodIcon } from '../enums';

export type FoodEntity = {
  id: string;

  title: string;
  icon: FoodIcon;

  weight: number;

  calories: number;
  protein: number;
  fat: number;
  carbs: number;
};
