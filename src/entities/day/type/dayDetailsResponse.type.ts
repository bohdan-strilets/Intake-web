import type { Food } from '@entities/food/type';

import type { Day } from './day.type';

export type DayDetailsResponse = {
  day: Day;
  food: Food[];
};
