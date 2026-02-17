import { formatDate } from './formatDate';

export const getWeekRange = (date = new Date()) => {
  const current = new Date(date);
  const day = current.getDay();

  const diffToMonday = day === 0 ? -6 : 1 - day;

  const start = new Date(current);
  start.setDate(current.getDate() + diffToMonday);

  const end = new Date(start);
  end.setDate(start.getDate() + 6);

  return {
    start: formatDate(start),
    end: formatDate(end),
  };
};
