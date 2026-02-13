import type { DayTotals } from './dayTotals.type';

export type CalendarCell = {
  date: string;
  totals: DayTotals;
};
