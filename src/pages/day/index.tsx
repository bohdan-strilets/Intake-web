import { useParams } from '@tanstack/react-router';

import { dayRoute } from '@app/router/routes/protected';

import { DailyStats } from '@widgets/DailyStats';
import { DayHeader } from '@widgets/DayHeader';
import { DayTotals } from '@widgets/DayTotals';
import { FoodList } from '@widgets/FoodList';

import { useDayDetails } from '@features/day/model';
import { AddFood } from '@features/food/addFromAi/ui';

import { Spinner } from '@shared/ui/feedback/Spinner';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';

export const DayPage = () => {
  const { date } = useParams({ from: dayRoute.id });
  const { data: dayDetails, isPending, isError } = useDayDetails(date);

  const dayTotal = dayDetails?.day.totals;
  const totalCalories = dayTotal?.calories || 0;

  const foodList = dayDetails?.food || [];

  if (isError) return <p>Error</p>;

  if (isPending) return <Spinner />;

  return (
    <Stack gap="md">
      <DayHeader date={dayDetails?.day.date} />

      <DayTotals
        calories={totalCalories}
        protein={dayTotal?.protein}
        fat={dayTotal?.fat}
        carbs={dayTotal?.carbs}
      />

      <DailyStats consumed={totalCalories} target={2500} />

      <Card>
        <AddFood date={dayDetails?.day.date} />
      </Card>

      <FoodList foods={foodList} date={dayDetails?.day.date} />
    </Stack>
  );
};
