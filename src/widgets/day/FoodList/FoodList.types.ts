import type { FoodEntity } from '@entities/food';

export type FoodListProps = {
  foods: FoodEntity[];
  date: string;
};
