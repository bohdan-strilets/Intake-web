import type { CalendarDay } from '../types';

export const mapCaloriesByDate = (
  data: CalendarDay[],
): Record<string, number> => {
  return Object.fromEntries(data.map((day) => [day.date, day.totalCalories]));
};
