import type { MatrixCell } from '@shared/lib/calendar';

export type MonthGridProps = {
  matrix: MatrixCell[][];
  onDayClick: (date: string) => void;
  monthKey: string;
  caloriesByDate?: Record<string, number>;
  targetCalories?: number;
};
