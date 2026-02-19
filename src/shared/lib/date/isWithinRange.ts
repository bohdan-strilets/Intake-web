import { toMidnight } from './toMidnight';

export const isWithinRange = (value: string, minDate: Date, maxDate: Date) => {
  const [year, month, day] = value.split('-').map(Number);

  const date = new Date(year, month - 1, day);

  const normalizedDate = toMidnight(date);
  const normalizedMin = toMidnight(minDate);
  const normalizedMax = toMidnight(maxDate);

  return normalizedDate >= normalizedMin && normalizedDate <= normalizedMax;
};
