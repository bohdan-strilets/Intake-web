import type { DayTotals } from './dayTotals.type';

export type DayEntity = {
  id: string;
  date: string;
  totals: DayTotals;
  weight?: number;
};
