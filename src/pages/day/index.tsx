import { useNavigate, useParams } from '@tanstack/react-router';

import { dayRoute } from '@app/router/routes/protected';

import { DailyStats } from '@widgets/day/DailyStats';
import { Error } from '@widgets/day/Error';
import { FoodList } from '@widgets/day/FoodList';
import { Header } from '@widgets/day/Header';
import { Loading } from '@widgets/day/Loading';
import { Totals } from '@widgets/day/Totals';
import { Weight } from '@widgets/day/Weight';

import { useDayDetailsQury } from '@features/day/dayDetails';
import { AddFoodForm } from '@features/food/addFood';

import { resolveDayParam } from '@entities/day';

import { formatDate } from '@shared/lib/date';
import { useSwipe } from '@shared/lib/swipe';
import { ROUTES } from '@shared/routes';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';

const getAdjacentDate = (dateStr: string, delta: number): string => {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + delta);
  return formatDate(date);
};

export const DayPage = () => {
  const navigate = useNavigate();
  const { date } = useParams({ from: dayRoute.id });
  const resolvedDate = resolveDayParam(date);

  const swipe = useSwipe({
    onSwipeLeft: () =>
      navigate({
        to: ROUTES.app.day,
        params: { date: getAdjacentDate(resolvedDate, 1) },
      }),
    onSwipeRight: () =>
      navigate({
        to: ROUTES.app.day,
        params: { date: getAdjacentDate(resolvedDate, -1) },
      }),
  });

  const { data, isPending, isError, refetch } = useDayDetailsQury(resolvedDate);

  if (isPending) return <Loading />;
  if (isError) return <Error refetch={refetch} />;

  const dayDetails = data;
  const { day, food, targetCalories } = dayDetails;
  const totals = day.totals;

  return (
    <Stack
      gap="lg"
      onTouchStart={swipe.onTouchStart}
      onTouchEnd={swipe.onTouchEnd}
    >
      <Header date={day.date} />

      <Weight dayId={day.id} date={day.date} weight={day.weight} />

      <Totals
        calories={totals.calories}
        protein={totals.protein}
        fat={totals.fat}
        carbs={totals.carbs}
      />

      <DailyStats consumed={totals.calories} target={targetCalories} />

      <Card shadow="sm">
        <AddFoodForm date={day.date} />
      </Card>

      <FoodList foods={food} date={day.date} />
    </Stack>
  );
};
