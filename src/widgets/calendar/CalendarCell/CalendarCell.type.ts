import type { CalendarCell } from '@widgets/calendar/MonthCalendar/types';

export type CalendarCellProps = {
  cell: CalendarCell;
  onClick?: (date: string) => void;
  calories?: number;
  targetCalories?: number;
};
