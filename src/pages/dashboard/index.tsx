import { useNavigate } from '@tanstack/react-router';

import {
  CalendarController,
  useCalendarNavigation,
} from '@widgets/calendar/CalendarController';
import { CalendarErrorState } from '@widgets/calendar/CalendarErrorState';
import { CalendarWeekDays } from '@widgets/calendar/CalendarWeekDays';
import { CallendarSkeleton } from '@widgets/calendar/CallendarSkeleton';
import { MonthCalendar } from '@widgets/calendar/MonthCalendar';

import { useMonthDetailsQuery } from '@features/calendar/monthDetails';

import { getMonthMatrix } from '@shared/lib/calendar';
import { formatMonthLabel } from '@shared/lib/date';
import { ROUTES } from '@shared/routes';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';

export const DashboardPage = () => {
  const navigate = useNavigate();

  const { year, month, monthParam, goPrevMonth, goNextMonth } =
    useCalendarNavigation();

  const { data, isLoading, isError, refetch } = useMonthDetailsQuery({
    month: monthParam,
  });

  if (isLoading) return <CallendarSkeleton />;
  if (isError) return <CalendarErrorState refetch={refetch} />;
  if (!data) return null;

  const matrix = getMonthMatrix(year, month);

  const handleDayClick = (date: string) => {
    navigate({ to: ROUTES.app.day, params: { date } });
  };

  const caloriesByDate = () => {
    if (!monthDays) return {};

    return Object.fromEntries(
      monthDays.days.map((cell) => [cell.date, cell.totals.calories]),
    );
  };

  const monthDays = data;
  const targetCalories = monthDays.targetCalories;

  const monthLabel = formatMonthLabel(year, month);

  return (
    <Stack gap="lg">
      <Card shadow="sm">
        <CalendarController
          label={monthLabel}
          onPrev={goPrevMonth}
          onNext={goNextMonth}
        />
      </Card>

      <Card shadow="sm">
        <CalendarWeekDays />

        <MonthCalendar
          matrix={matrix}
          onDayClick={handleDayClick}
          caloriesByDate={caloriesByDate()}
          targetCalories={targetCalories}
        />
      </Card>
    </Stack>
  );
};
