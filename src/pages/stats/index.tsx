import { useMemo, useState } from 'react';

import { StatsCaloriesCard } from '@widgets/stats/StatsCaloriesCard';
import { StatsErrorState } from '@widgets/stats/StatsErrorState';
import { StatsMacrosCard } from '@widgets/stats/StatsMacrosCard';
import { StatsPeriodCard } from '@widgets/stats/StatsPeriodCard';
import { StatsSkeleton } from '@widgets/stats/StatsSkeleton';
import { StatsWeightCard } from '@widgets/stats/StatsWeightCard';

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

  if (isPending) return <StatsSkeleton />;
  if (isError) return <StatsErrorState refetch={refetch} />;

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

      <StatsPeriodCard
        periodStart={stats.period.start}
        periodEnd={stats.period.end}
        loggedDays={stats.period.loggedDays}
        totalDays={stats.period.totalDays}
      />

      <StatsCaloriesCard
        caloriesAverage={stats.calories.average}
        caloriesGoal={stats.calories.goal}
        caloriesDelta={stats.calories.delta}
      />

      <StatsMacrosCard
        protein={stats.macros.protein}
        fat={stats.macros.fat}
        carbs={stats.macros.carbs}
      />

      {stats.weight && <StatsWeightCard weightDelta={stats.weight.delta} />}
    </Stack>
  );
};
