import { useTranslation } from '@shared/i18n';
import { vars } from '@shared/styles/contract';
import { gradients } from '@shared/styles/gradients.css';
import { DonutChart } from '@shared/ui/chart/DonutChart';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

import {
  chartWrapper,
  macroLabel,
  macroValuesRow,
  macrosList,
  progressFill,
  progressTrack,
} from './MacroDonutChart.css';

const CHART_SIZE = 140;
const CHART_THICKNESS = 14;

const MACRO_KEYS = [
  { key: 'protein' as const, color: vars.colors.macroProtein },
  { key: 'fat' as const, color: vars.colors.macroFat },
  { key: 'carbs' as const, color: vars.colors.macroCarbs },
] as const;

export type MacroValue = { average: number; target: number };

export type MacroDonutChartProps = {
  protein: MacroValue;
  fat: MacroValue;
  carbs: MacroValue;
  periodLabel: string;
};

export function MacroDonutChart({
  protein,
  fat,
  carbs,
  periodLabel,
}: MacroDonutChartProps) {
  const { t: tStats } = useTranslation('stats');
  const { t: tCommon } = useTranslation('common');

  const averages = {
    protein: protein.average,
    fat: fat.average,
    carbs: carbs.average,
  };
  const total = averages.protein + averages.fat + averages.carbs;
  const hasData = total > 0;

  const segments = hasData
    ? MACRO_KEYS.map(({ key, color }) => ({
        value: averages[key],
        color,
      }))
    : [];

  const chartAriaLabel = hasData
    ? tStats('macroDonut.chartDescription', {
        protein: averages.protein,
        fat: averages.fat,
        carbs: averages.carbs,
      })
    : tStats('macroDonut.noData');

  const unit = tCommon('units.gramsShort');

  return (
    <Card
      shadow="sm"
      padding="lg"
      gap="xl"
      className={gradients.surfaceSoft}
      aria-label={chartAriaLabel}
    >
      <Stack gap="xl" align="center">
        <Title level={2} size="sm" align="center">
          {tStats('macroDonut.title', { period: periodLabel })}
        </Title>

        {hasData && (
          <div
            className={chartWrapper}
            style={{ width: CHART_SIZE, height: CHART_SIZE }}
          >
            <DonutChart
              segments={segments}
              size={CHART_SIZE}
              thickness={CHART_THICKNESS}
            />
          </div>
        )}

        {hasData ? (
          <Stack gap="sm" className={macrosList}>
            {MACRO_KEYS.map(({ key, color }) => {
              const value = averages[key];
              const target = key === 'protein' ? protein.target : key === 'fat' ? fat.target : carbs.target;
              const percent = total > 0 ? (value / total) * 100 : 0;
              return (
                <Stack key={key} gap="xs">
                  <span className={macroLabel}>
                    {tCommon(`macroNutrients.${key}`)}
                  </span>
                  <div className={progressTrack}>
                    <div
                      className={progressFill}
                      style={{
                        width: `${percent}%`,
                        backgroundColor: color,
                      }}
                      aria-hidden
                    />
                  </div>
                  <div className={macroValuesRow}>
                    <span>
                      {value}
                      {unit}
                    </span>
                    <span>
                      {target}
                      {unit}
                    </span>
                  </div>
                </Stack>
              );
            })}
          </Stack>
        ) : (
          <Paragraph size="sm" tone="muted">
            {tStats('macroDonut.noData')}
          </Paragraph>
        )}
      </Stack>
    </Card>
  );
}
