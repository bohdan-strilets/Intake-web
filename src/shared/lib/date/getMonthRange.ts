import { formatDate } from './formatDate';

export function getMonthRange(date = new Date()) {
  const current = new Date(date);

  const start = new Date(current.getFullYear(), current.getMonth(), 1);

  const end = new Date(current.getFullYear(), current.getMonth() + 1, 0);

  return {
    start: formatDate(start),
    end: formatDate(end),
  };
}
