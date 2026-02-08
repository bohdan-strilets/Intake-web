import type { CalendarCell } from '@widgets/Calendar/types';

export type CalendarDayProps = {
  cell: CalendarCell;
  onClick?: (date: string) => void;
  calories?: number;
};
