import type { FoodIcon } from '@entities/food/enums';

export type FoodItemProps = {
  date: string;
  id: string;
  title: string;
  icon: FoodIcon;
  weight: number;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
};
