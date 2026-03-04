import type { FoodEntity } from '@entities/food';

import type { DayEntity } from './dayEntity.type';

export type DayDetailsResponse = {
  day: DayEntity;
  food: FoodEntity[];
  targetCalories: number;
  targetProtein: number;
  targetFat: number;
  targetCarbs: number;
};
