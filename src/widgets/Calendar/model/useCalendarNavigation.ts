import { useState } from 'react';

const today = new Date();

export const useCalendarNavigation = () => {
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const monthParam = `${year}-${String(month + 1).padStart(2, '0')}`;

  const goPrevMonth = () => {
    setMonth((prev) => {
      if (prev === 0) {
        setYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const goNextMonth = () => {
    setMonth((prev) => {
      if (prev === 11) {
        setYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  return {
    year,
    month,
    monthParam,
    goPrevMonth,
    goNextMonth,
  };
};
