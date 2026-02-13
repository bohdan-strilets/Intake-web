import { useNavigate } from '@tanstack/react-router';
import { useMemo } from 'react';

import {
  CalendarController,
  useCalendarNavigation,
} from '@widgets/calendar/CalendarController';
import { Calendar, getMonthMatrix } from '@widgets/calendar/MonthCalendar';

import { useMonthDetailsQuery } from '@features/calendar/monthDetails';

import { formatMonthLabel } from '@shared/lib/date';
import { ROUTES } from '@shared/routes';
import { Spinner } from '@shared/ui/feedback/Spinner';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';

export const DashboardPage = () => {
  const navigate = useNavigate();

  const { year, month, monthParam, goPrevMonth, goNextMonth } =
    useCalendarNavigation();

  const { data = [], isLoading } = useMonthDetailsQuery({ month: monthParam });

  const matrix = useMemo(() => getMonthMatrix(year, month), [year, month]);

  const handleDayClick = (date: string) => {
    navigate({
      to: ROUTES.app.day,
      params: { date },
    });
  };

  const monthLabel = formatMonthLabel(year, month);

  const caloriesByDate = useMemo(() => {
    return Object.fromEntries(
      data.map((cell) => [cell.date, cell.totals.calories]),
    );
  }, [data]);

  if (isLoading) {
    return <Spinner size="lg" />;
  }

  return (
    <Card shadow="sm">
      <CalendarController
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
