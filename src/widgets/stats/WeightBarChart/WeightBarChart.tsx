import { useMemo } from 'react';

import { useTranslation } from '@shared/i18n';
import { formatDay, formatShortWeekday } from '@shared/lib/date';
import { BarChart } from '@shared/ui/chart/BarChart';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { legendRow, legendSwatch } from '../CaloriesBarChart/CaloriesBarChart.css';
import type { WeightBarChartProps } from './WeightBarChart.types';

export const WeightBarChart = ({
  stats,
  period,
  referenceWeight,
}: WeightBarChartProps) => {
  const { t: tCommon } = useTranslation('common');
  const { t: tStats } = useTranslation('stats');

  const chartItems = useMemo(() => {
    return stats.days.map((day) => ({
      value: day.weight ?? null,
      label:
        period === 'week' ? formatShortWeekday(day.date) : formatDay(day.date),
    }));
  }, [stats.days, period]);

  const { hasWeight, maxWeight, averageWeight } = useMemo(() => {
    const weights = stats.days
      .map((d) => d.weight)
      .filter((w): w is number => typeof w === 'number');
    const hasWeight = weights.length > 0;
    const maxWeight = hasWeight ? Math.max(...weights) : 1;
    const averageWeight = hasWeight
      ? weights.reduce((a, b) => a + b, 0) / weights.length
      : undefined;
    return { hasWeight, maxWeight, averageWeight };
  }, [stats.days]);

  const scaleGoal =
    referenceWeight != null
      ? Math.max(referenceWeight, maxWeight)
      : maxWeight;

  const getTooltipContent = (item: { value: number | null; label?: string }) => {
    const label = item.label ?? '';
    if (item.value === null) return label;
    return `${label} — ${item.value.toFixed(1)} ${tCommon('units.kilograms')}`;
  };

  if (!hasWeight) {
    return (
      <Card shadow="sm" gap="sm">
        <Paragraph weight="medium">{tStats('summary.weightByDay')}</Paragraph>
        <Paragraph size="sm" tone="muted">
          {tStats('summary.chartNoData')}
        </Paragraph>
      </Card>
    );
  }

  return (
    <Card shadow="sm" gap="sm">
      <Paragraph weight="medium">{tStats('summary.weightByDay')}</Paragraph>

      <BarChart
        items={chartItems}
        average={averageWeight}
        goal={scaleGoal}
        toneStrategy="above-is-bad"
        fewerGuides
        fewerLabels
        getTooltip={(item) => getTooltipContent(item)}
      />

      <Stack>
        <div className={legendRow}>
          <span className={legendSwatch({ variant: 'goal' })} />
          <Paragraph size="xs" tone="muted">
            {tStats('summary.averageWeight')}: {averageWeight!.toFixed(1)}{' '}
            {tCommon('units.kilograms')}
          </Paragraph>
        </div>
      </Stack>
    </Card>
  );
};
