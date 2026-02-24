import { useTranslation } from '@shared/i18n';
import { formatDay, formatShortWeekday } from '@shared/lib/date';
import { BarChart } from '@shared/ui/chart/BarChart';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { CaloriesBarChartProps } from './CaloriesBarChart.types';

export const CaloriesBarChart = ({ stats, period }: CaloriesBarChartProps) => {
  const { t: tCommon } = useTranslation('common');
  const { t: tStats } = useTranslation('stats');

  const generateLabel = (date: string) => {
    return period === 'week' ? formatShortWeekday(date) : formatDay(date);
  };

  const chartItems = stats.days.map((day) => ({
    value: day.calories ?? null,
    label: generateLabel(day.date),
  }));

  return (
    <Card shadow="sm" gap="sm">
      <Paragraph weight="medium">{tStats('summary.averageCalories')}</Paragraph>

      <BarChart
        items={chartItems}
        average={stats.calories.goal}
        goal={stats.calories.tdee}
      />

      <Stack>
        <Paragraph size="xs" tone="muted">
          {tStats('summary.dailyGoal')}: {stats.calories.goal}{' '}
          {tCommon('units.kcal')}
        </Paragraph>
        <Paragraph size="xs" tone="muted">
          {tStats('summary.maintenanceCalories')}: {stats.calories.tdee}{' '}
          {tCommon('units.kcal')}
        </Paragraph>
      </Stack>
    </Card>
  );
};
