import { useParams } from '@tanstack/react-router';

import { dayRoute } from '@app/router/routes/protected';

import { DailyStats } from '@widgets/day/DailyStats';
import { DayHeader } from '@widgets/day/DayHeader';
import { DayTotals } from '@widgets/day/DayTotals';
import { FoodList } from '@widgets/day/FoodList';

import { useDayDetailsQury } from '@features/day/dayDetails';
import { AddFoodForm } from '@features/food/addFood';

import { Spinner } from '@shared/ui/feedback/Spinner';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';

export const DayPage = () => {
  const { date } = useParams({ from: dayRoute.id });
  const { data: dayDetails, isPending, isError } = useDayDetailsQury(date);

  const dayTotal = dayDetails?.day.totals;
  const totalCalories = dayTotal?.calories || 0;

  const foodList = dayDetails?.food || [];

  if (isError) return <p>Error</p>;

  if (isPending) return <Spinner />;

  return (
    <Stack gap="lg">
      <DayHeader date={dayDetails?.day.date} />

      <DayTotals
        calories={totalCalories}
        protein={dayTotal?.protein}
        fat={dayTotal?.fat}
        carbs={dayTotal?.carbs}
      />

      <DailyStats consumed={totalCalories} target={2500} />

      <Card shadow="sm">
        <AddFoodForm date={dayDetails?.day.date} />
      </Card>

      <FoodList foods={foodList} date={dayDetails?.day.date} />
    </Stack>
  );
};
