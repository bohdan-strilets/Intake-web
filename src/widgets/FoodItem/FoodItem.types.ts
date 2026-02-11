import type { FoodIcon } from '@entities/food/enums';

export type FoodItemProps = {
  title: string;
  icon: FoodIcon;
  weight: number;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
};
