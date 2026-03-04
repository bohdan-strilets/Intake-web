import { useMemo } from 'react';

import { useTranslation } from '@shared/i18n';
import { formatDay, formatShortWeekday } from '@shared/lib/date';
import { BarChart } from '@shared/ui/chart/BarChart';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { legendRow, legendSwatch } from './CaloriesBarChart.css';
import type { CaloriesBarChartProps } from './CaloriesBarChart.types';

export const CaloriesBarChart = ({ stats, period }: CaloriesBarChartProps) => {
  const { t: tCommon } = useTranslation('common');
  const { t: tStats } = useTranslation('stats');

  const generateLabel = (date: string) => {
    return period === 'week' ? formatShortWeekday(date) : formatDay(date);
  };

  const chartItems = useMemo(
    () =>
      stats.days.map((day) => ({
        value: day.calories ?? null,
        label: generateLabel(day.date),
      })),
    [stats.days, period],
  );

  const hasAnyData = chartItems.some((item) => item.value !== null);

  const getTooltipContent = (item: {
    value: number | null;
    label?: string;
  }) => {
    const label = item.label ?? '';
    if (item.value === null) return label;
    return `${label} — ${item.value} ${tCommon('units.kcal')}`;
  };

  if (!hasAnyData) {
    return (
      <Card shadow="sm" gap="sm">
        <Paragraph weight="medium">{tStats('summary.caloriesByDay')}</Paragraph>
        <Paragraph size="sm" tone="muted">
          {tStats('summary.chartNoData')}
        </Paragraph>
      </Card>
    );
  }

  return (
    <Card shadow="sm" gap="sm">
      <Paragraph weight="medium">{tStats('summary.caloriesByDay')}</Paragraph>

      <BarChart
        items={chartItems}
        average={stats.calories.goal}
        goal={stats.calories.tdee}
        secondaryLine={stats.calories.tdee}
        fewerGuides
        fewerLabels
        getTooltip={(item) => getTooltipContent(item)}
      />

      <Stack>
        <div className={legendRow}>
          <span className={legendSwatch({ variant: 'goal' })} />
          <Paragraph size="xs" tone="muted">
            {tStats('summary.dailyGoal')}: {stats.calories.goal}{' '}
            {tCommon('units.kcal')}
          </Paragraph>
        </div>
        <div className={legendRow}>
          <span className={legendSwatch({ variant: 'maintenance' })} />
          <Paragraph size="xs" tone="muted">
            {tStats('summary.maintenanceCalories')}: {stats.calories.tdee}{' '}
            {tCommon('units.kcal')}
          </Paragraph>
        </div>
      </Stack>
    </Card>
  );
};
