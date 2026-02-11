import type { DayTotals } from './dayTotals.type';

export type Day = {
  id: string;
  date: string;
  totals: DayTotals;
  weight?: number;
};
