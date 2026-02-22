import { useNavigate } from '@tanstack/react-router';

import {
  Controller,
  useCalendarNavigation,
} from '@widgets/calendar/Controller';
import { Error } from '@widgets/calendar/Error';
import { Loading } from '@widgets/calendar/Loading';
import { MonthGrid } from '@widgets/calendar/MonthGrid';
import { WeekDays } from '@widgets/calendar/WeekDays';

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

  if (isLoading) return <Loading />;
  if (isError) return <Error refetch={refetch} />;
  if (!data) return null;

  const monthDays = data;
  const targetCalories = monthDays.targetCalories;

  const matrix = getMonthMatrix(year, month);
  const monthLabel = formatMonthLabel(year, month);

  const caloriesByDate = Object.fromEntries(
    monthDays.days.map((day) => [day.date, day.totals.calories]),
  );

  const handleDayClick = (date: string) => {
    navigate({ to: ROUTES.app.day, params: { date } });
  };

  return (
    <Stack gap="lg">
      <Card shadow="sm">
        <Controller
          label={monthLabel}
          onPrev={goPrevMonth}
          onNext={goNextMonth}
        />
      </Card>

      <Card shadow="sm">
        <WeekDays />

        <MonthGrid
          matrix={matrix}
          onDayClick={handleDayClick}
          caloriesByDate={caloriesByDate}
          targetCalories={targetCalories}
        />
      </Card>
    </Stack>
  );
};
