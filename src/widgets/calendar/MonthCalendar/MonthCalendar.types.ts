import type { MatrixCell } from '@shared/lib/calendar';

export type MonthCalendarProps = {
  matrix: MatrixCell[][];
  onDayClick: (date: string) => void;
  caloriesByDate?: Record<string, number>;
  targetCalories?: number;
};
