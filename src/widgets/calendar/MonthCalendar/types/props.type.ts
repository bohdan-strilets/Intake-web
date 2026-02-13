import type { CalendarCell } from '@widgets/calendar/MonthCalendar/types';

export type MonthCalendarProps = {
  matrix: CalendarCell[][];
  onDayClick: (date: string) => void;
  showWeekDays?: boolean;
  caloriesByDate?: Record<string, number>;
};
