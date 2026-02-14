import { useNavigate } from '@tanstack/react-router';
import { useMemo } from 'react';

import {
  CalendarController,
  useCalendarNavigation,
} from '@widgets/calendar/CalendarController';
import { CallendarSkeleton } from '@widgets/calendar/CallendarSkeleton';
import { MonthCalendar, getMonthMatrix } from '@widgets/calendar/MonthCalendar';

import { useMonthDetailsQuery } from '@features/calendar/monthDetails';

import { formatMonthLabel } from '@shared/lib/date';
import { ROUTES } from '@shared/routes';
import { ErrorState } from '@shared/ui/feedback/ErrorState';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';

export const DashboardPage = () => {
  const navigate = useNavigate();

  const { year, month, monthParam, goPrevMonth, goNextMonth } =
    useCalendarNavigation();

  const {
    data: monthDays,
    isLoading,
    isError,

    refetch,
  } = useMonthDetailsQuery({
    month: monthParam,
  });

  const matrix = useMemo(() => getMonthMatrix(year, month), [year, month]);

  const handleDayClick = (date: string) => {
    navigate({
      to: ROUTES.app.day,
      params: { date },
    });
  };

  const monthLabel = formatMonthLabel(year, month);

  const caloriesByDate = useMemo(() => {
    if (!monthDays) return {};

    return Object.fromEntries(
      monthDays.map((cell) => [cell.date, cell.totals.calories]),
    );
  }, [monthDays]);

  if (isLoading) return <CallendarSkeleton />;

  if (isError) {
    return (
      <ErrorState
        title="Failed to load calendar"
        description="Please check your connection and try again."
        actionLabel="Try again"
        onAction={refetch}
      />
    );
  }

  return (
    <Card shadow="sm">
      <CalendarController
        label={monthLabel}
        onPrev={goPrevMonth}
        onNext={goNextMonth}
      />

      <Divider />

      <MonthCalendar
        matrix={matrix}
        onDayClick={handleDayClick}
        caloriesByDate={caloriesByDate}
      />
    </Card>
  );
};
