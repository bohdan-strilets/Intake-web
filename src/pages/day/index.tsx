import { useParams } from '@tanstack/react-router';

import { dayRoute } from '@app/router/routes/protected';

import { DailyStats } from '@widgets/day/DailyStats';
import { DayHeader } from '@widgets/day/DayHeader';
import { DaySkeleton } from '@widgets/day/DaySkeleton';
import { DayTotals } from '@widgets/day/DayTotals';
import { FoodList } from '@widgets/day/FoodList';

import { useDayDetailsQury } from '@features/day/dayDetails';
import { AddFoodForm } from '@features/food/addFood';

import { resolveDayParam } from '@entities/day';

import { useTranslation } from '@shared/i18n';
import { ErrorState } from '@shared/ui/feedback/ErrorState';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';

export const DayPage = () => {
  const { date } = useParams({ from: dayRoute.id });
  const resolvedDate = resolveDayParam(date);

  const { t: tDay } = useTranslation('day');
  const { t: tCommon } = useTranslation('common');

  const {
    data: dayDetails,
    isPending,
    isError,
    refetch,
  } = useDayDetailsQury(resolvedDate);

  if (isPending) return <DaySkeleton />;

  if (isError) {
    return (
      <ErrorState
        title={tDay('errors.dayLoad.title')}
        description={tDay('errors.dayLoad.description')}
        actionLabel={tCommon('actions.tryAgain')}
        onAction={refetch}
      />
    );
  }

  const { day, food, targetCalories } = dayDetails;
  const dayTotals = day.totals;

  return (
    <Stack gap="lg">
      <DayHeader date={day.date} />

      <DayTotals
        calories={dayTotals.calories}
        protein={dayTotals.protein}
        fat={dayTotals.fat}
        carbs={dayTotals.carbs}
      />

      <DailyStats consumed={dayTotals.calories} target={targetCalories} />

      <Card shadow="sm">
        <AddFoodForm date={day.date} />
      </Card>

      <FoodList foods={food} date={day.date} />
    </Stack>
  );
};
