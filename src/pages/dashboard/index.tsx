import { useNavigate } from '@tanstack/react-router';
import { useMemo } from 'react';

import { getMonthMatrix, useCalendarNavigation } from '@widgets/Calendar/model';
import { Calendar, CalendarMonthHeader } from '@widgets/Calendar/ui';

import { mapCaloriesByDate } from '@features/calendar/mappers';
import { useCalendarMonth } from '@features/calendar/model';

import { formatMonthLabel } from '@shared/lib/date';
import { ROUTES } from '@shared/routes';
import { Spinner } from '@shared/ui/feedback/Spinner';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';

export const DashboardPage = () => {
  const navigate = useNavigate();

  const { year, month, monthParam, goPrevMonth, goNextMonth } =
    useCalendarNavigation();

  const { data = [], isLoading } = useCalendarMonth({ month: monthParam });

  const matrix = useMemo(() => getMonthMatrix(year, month), [year, month]);

  const handleDayClick = (date: string) => {
    navigate({
      to: ROUTES.app.day,
      params: { date },
    });
  };

  const monthLabel = formatMonthLabel(year, month);
  const caloriesByDate = useMemo(() => mapCaloriesByDate(data), [data]);

  if (isLoading) {
    return <Spinner size="lg" />;
  }

  return (
    <Card shadow="sm">
      <CalendarMonthHeader
        label={monthLabel}
        onPrev={goPrevMonth}
        onNext={goNextMonth}
      />

      <Divider />

      <Calendar
        matrix={matrix}
        onDayClick={handleDayClick}
        caloriesByDate={caloriesByDate}
      />
    </Card>
  );
};
