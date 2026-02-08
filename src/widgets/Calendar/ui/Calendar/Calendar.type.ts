import type { CalendarCell } from '@widgets/Calendar/types';

export type CalendarProps = {
  matrix: CalendarCell[][];
  onDayClick: (date: string) => void;
  showWeekDays?: boolean;
  caloriesByDate?: Record<string, number>;
};
