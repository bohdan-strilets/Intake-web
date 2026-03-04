import { useCallback, useMemo, useState } from 'react';

import { CaloriesBarChart } from '@widgets/stats/CaloriesBarChart';
import { CaloriesCard } from '@widgets/stats/CaloriesCard';
import { Error } from '@widgets/stats/Error';
import { Loading } from '@widgets/stats/Loading';
import { MacroDonutChart } from '@widgets/stats/MacroDonutChart';
import { PeriodCard } from '@widgets/stats/PeriodCard';
import { WeightBarChart } from '@widgets/stats/WeightBarChart';

import { useStatsQuery } from '@features/stats/getStats';

import type { PeriodStats } from '@entities/stats';

import { useTranslation } from '@shared/i18n';
import { getMonthRange, getWeekRange } from '@shared/lib/date';
import { useSwipe } from '@shared/lib/swipe/useSwipe';
import { SegmentedControl } from '@shared/ui/controls/SegmentedControl';
import { Stack } from '@shared/ui/layout/Stack';

export const StatsPage = () => {
  const [period, setPeriod] = useState<PeriodStats>('week');
  const [offset, setOffset] = useState(0);

  const { t } = useTranslation('calendar');

  const range = useMemo(() => {
    const base = new Date();
    if (period === 'week') {
      base.setDate(base.getDate() - offset * 7);
      return getWeekRange(base);
    }
    base.setMonth(base.getMonth() - offset);
    return getMonthRange(base);
  }, [period, offset]);

  const goPrev = useCallback(() => setOffset((o) => o + 1), []);
  const goNext = useCallback(() => setOffset((o) => o - 1), []);

  const handlePeriodChange = useCallback((value: PeriodStats) => {
    setPeriod(value);
    setOffset(0);
  }, []);

  const swipe = useSwipe({
    onSwipeLeft: goNext,
    onSwipeRight: goPrev,
  });

  const { data, isPending, isError, error, refetch } = useStatsQuery(range);

  if (isPending && !data) return <Loading />;
  if (isError) return <Error refetch={refetch} error={error} />;
  if (!data) return <Loading />;

  const stats = data;

  return (
    <Stack gap="lg">
      <SegmentedControl
        value={period}
        options={[
          { label: t('range.week'), value: 'week' },
          { label: t('range.month'), value: 'month' },
        ]}
        onChange={handlePeriodChange}
      />

      <div {...swipe}>
        <PeriodCard
          periodStart={stats.period.start}
          periodEnd={stats.period.end}
          loggedDays={stats.period.loggedDays}
          totalDays={stats.period.totalDays}
          onPrev={goPrev}
          onNext={goNext}
        />
      </div>

      <CaloriesCard
        caloriesAverage={stats.calories.average}
        caloriesGoal={stats.calories.goal}
        caloriesDelta={stats.calories.delta}
      />

      <MacroDonutChart
        protein={stats.macros.protein}
        fat={stats.macros.fat}
        carbs={stats.macros.carbs}
        periodLabel={period === 'week' ? t('range.week') : t('range.month')}
      />


      <CaloriesBarChart stats={stats} period={period} />

      <WeightBarChart stats={stats} period={period} />
    </Stack>
  );
};
