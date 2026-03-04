import { useMemo } from 'react';

import { useTranslation } from '@shared/i18n';
import { formatDay, formatShortWeekday } from '@shared/lib/date';
import { BarChart } from '@shared/ui/chart/BarChart';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { legendRow, legendSwatch } from '../CaloriesBarChart/CaloriesBarChart.css';
import type { WeightBarChartProps } from './WeightBarChart.types';

export const WeightBarChart = ({ stats, period }: WeightBarChartProps) => {
  const { t: tCommon } = useTranslation('common');
  const { t: tStats } = useTranslation('stats');

  const chartItems = useMemo(() => {
    return stats.days.map((day) => ({
      value: day.weight ?? null,
      label:
        period === 'week' ? formatShortWeekday(day.date) : formatDay(day.date),
    }));
  }, [stats.days, period]);

  const { hasWeight, maxWeight, initialWeight, targetWeight } = useMemo(() => {
    const withWeight = stats.days
      .map((d) => ({ date: d.date, weight: d.weight }))
      .filter((d): d is { date: string; weight: number } => typeof d.weight === 'number')
      .sort((a, b) => a.date.localeCompare(b.date));
    const hasWeight = withWeight.length > 0;
    const maxWeight = hasWeight ? Math.max(...withWeight.map((d) => d.weight)) : 1;
    // Backend sends initial, or fallback: weight from first day in period that has weight
    const initialWeight = stats.weight?.initial ?? (withWeight[0]?.weight);
    const targetWeight = stats.weight?.target;
    return { hasWeight, maxWeight, initialWeight, targetWeight };
  }, [stats.days, stats.weight?.initial, stats.weight?.target]);

  const scaleGoal = [maxWeight, initialWeight, targetWeight]
    .filter((v): v is number => typeof v === 'number')
    .reduce((acc, v) => Math.max(acc, v), maxWeight);

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
        average={initialWeight}
        goal={scaleGoal}
        secondaryLine={targetWeight}
        toneStrategy="above-is-bad"
        fewerGuides
        fewerLabels
        getTooltip={(item) => getTooltipContent(item)}
      />

      <Stack>
        {initialWeight != null && (
          <div className={legendRow}>
            <span className={legendSwatch({ variant: 'goal' })} />
            <Paragraph size="xs" tone="muted">
              {tStats('summary.initialWeight')}: {initialWeight.toFixed(1)}{' '}
              {tCommon('units.kilograms')}
            </Paragraph>
          </div>
        )}
        {targetWeight != null && (
          <div className={legendRow}>
            <span className={legendSwatch({ variant: 'maintenance' })} />
            <Paragraph size="xs" tone="muted">
              {tStats('summary.targetWeight')}: {targetWeight.toFixed(1)}{' '}
              {tCommon('units.kilograms')}
            </Paragraph>
          </div>
        )}
      </Stack>
    </Card>
  );
};
