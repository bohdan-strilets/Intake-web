import type { MatrixCell } from '@shared/lib/calendar';

export type CellProps = {
  cell: MatrixCell;
  onClick?: (date: string) => void;
  calories?: number;
  targetCalories?: number;
};
