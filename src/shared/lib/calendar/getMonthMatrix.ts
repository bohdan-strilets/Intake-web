import { formatDate, isSameDate, WEEK_DAYS } from '@shared/lib/date';

import type { MatrixCell } from './types';

export const getMonthMatrix = (year: number, month: number): MatrixCell[][] => {
  const result: MatrixCell[][] = [];

  const today = new Date();

  const firstOfMonth = new Date(year, month, 1);
  const startDay = (firstOfMonth.getDay() + 6) % 7;

  const cursor = new Date(year, month, 1 - startDay);

  for (let week = 0; week < 6; week++) {
    const row: MatrixCell[] = [];

    for (let day = 0; day < WEEK_DAYS; day++) {
      const isCurrentMonth = cursor.getMonth() === month;

      row.push({
        date: isCurrentMonth ? formatDate(cursor) : null,
        dayNumber: isCurrentMonth ? cursor.getDate() : null,
        isToday: isSameDate(cursor, today),
        isCurrentMonth,
      });

      cursor.setDate(cursor.getDate() + 1);
    }

    result.push(row);
  }

  return result;
};
