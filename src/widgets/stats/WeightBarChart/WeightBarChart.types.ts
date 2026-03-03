import type { PeriodStats, StatsEntity } from '@entities/stats';

export type WeightBarChartProps = {
  stats: StatsEntity;
  period: PeriodStats;
  /** Reference weight (e.g. start or profile weight) for scale; scale max will be at least this. */
  referenceWeight?: number;
};
