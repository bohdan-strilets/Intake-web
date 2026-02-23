import { useParams } from '@tanstack/react-router';

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

import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';

export const DayPage = () => {
  const { date } = useParams({ from: dayRoute.id });
  const resolvedDate = resolveDayParam(date);

  const { data, isPending, isError, refetch } = useDayDetailsQury(resolvedDate);

  if (isPending) return <Loading />;
  if (isError) return <Error refetch={refetch} />;
  if (!data) return null;

  const dayDetails = data;
  const { day, food, targetCalories } = dayDetails;
  const totals = day.totals;

  return (
    <Stack gap="lg">
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
