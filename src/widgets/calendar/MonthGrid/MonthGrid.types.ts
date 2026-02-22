import type { MatrixCell } from '@shared/lib/calendar';

export type MonthGridProps = {
  matrix: MatrixCell[][];
  onDayClick: (date: string) => void;
  caloriesByDate?: Record<string, number>;
  targetCalories?: number;
};
