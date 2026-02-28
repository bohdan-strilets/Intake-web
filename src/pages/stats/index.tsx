import { useMemo, useState } from 'react';

import { CaloriesBarChart } from '@widgets/stats/CaloriesBarChart';
import { WeightBarChart } from '@widgets/stats/WeightBarChart';
import { CaloriesCard } from '@widgets/stats/CaloriesCard';
import { Error } from '@widgets/stats/Error';
import { Loading } from '@widgets/stats/Loading';
import { MacrosCard } from '@widgets/stats/MacrosCard';
import { PeriodCard } from '@widgets/stats/PeriodCard';
import { WeightCard } from '@widgets/stats/WeightCard';

import { useStatsQuery } from '@features/stats/getStats';

import type { PeriodStats } from '@entities/stats';

import { useTranslation } from '@shared/i18n';
import { getMonthRange, getWeekRange } from '@shared/lib/date';
import { SegmentedControl } from '@shared/ui/controls/SegmentedControl';
import { Stack } from '@shared/ui/layout/Stack';

export const StatsPage = () => {
  const [period, setPeriod] = useState<PeriodStats>('week');

  const { t } = useTranslation('calendar');

  const range = useMemo(() => {
    return period === 'week' ? getWeekRange() : getMonthRange();
  }, [period]);

  const { data, isPending, isError, refetch } = useStatsQuery(range);

  if (isPending) return <Loading />;
  if (isError) return <Error refetch={refetch} />;

  const stats = data;

  return (
    <Stack gap="lg">
      <SegmentedControl
        value={period}
        options={[
          { label: t('range.week'), value: 'week' },
          { label: t('range.month'), value: 'month' },
        ]}
        onChange={setPeriod}
      />

      <PeriodCard
        periodStart={stats.period.start}
        periodEnd={stats.period.end}
        loggedDays={stats.period.loggedDays}
        totalDays={stats.period.totalDays}
      />

      <CaloriesCard
        caloriesAverage={stats.calories.average}
        caloriesGoal={stats.calories.goal}
        caloriesDelta={stats.calories.delta}
      />

      <MacrosCard
        protein={stats.macros.protein}
        fat={stats.macros.fat}
        carbs={stats.macros.carbs}
      />

      {stats.weight && <WeightCard weightDelta={stats.weight.delta} />}

      <CaloriesBarChart stats={stats} period={period} />

      <WeightBarChart stats={stats} period={period} />
    </Stack>
  );
};
