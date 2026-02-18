import type { CalendarCell } from '@widgets/calendar/MonthCalendar/types';

export type MonthCalendarProps = {
  matrix: CalendarCell[][];
  onDayClick: (date: string) => void;
  caloriesByDate?: Record<string, number>;
  targetCalories?: number;
};
