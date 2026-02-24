import type { PeriodStats, StatsEntity } from '@entities/stats';

export type CaloriesBarChartProps = {
  stats: StatsEntity;
  period: PeriodStats;
};
