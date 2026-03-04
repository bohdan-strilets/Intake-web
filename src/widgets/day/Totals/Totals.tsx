import { useTranslation } from '@shared/i18n';
import { gradients } from '@shared/styles/gradients.css';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Stack } from '@shared/ui/layout/Stack';
import { AnimatedCounter } from '@shared/ui/motion/AnimatedCounter';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import {
  caloriesNumber,
  macroCard,
  macroCardContent,
  macroCardsRow,
  macroCardValue,
} from './Totals.css';
import type { TotalsProps } from './Totals.types';

const formatMacroValue = (actual: number, target: number | undefined, unit: string): string => {
  if (target != null && target > 0) {
    return `${actual.toFixed(1)} / ${target} ${unit}`;
  }
  return `${actual.toFixed(1)} ${unit}`;
};

export const Totals = ({
  calories = 0,
  protein = 0,
  proteinTarget,
  fat = 0,
  fatTarget,
  carbs = 0,
  carbsTarget,
}: TotalsProps) => {
  const { t: tCommon } = useTranslation('common');
  const unit = tCommon('units.gramsShort');

  return (
    <Card shadow="sm" className={gradients.surfaceSoft}>
      <Inline align="baseline" gap="sm">
        <Paragraph weight="bold" size="display" className={caloriesNumber}>
          <AnimatedCounter value={calories} />
        </Paragraph>
        <Paragraph weight="medium" size="lg" tone="muted">
          {tCommon('macroNutrients.calories')}
        </Paragraph>
      </Inline>

      <div className={macroCardsRow}>
        <Card shadow="sm" className={`${gradients.macroProtein} ${macroCard}`}>
          <Stack gap="xs" align="center" className={macroCardContent}>
            <span>{tCommon('macroNutrients.protein')}</span>
            <span className={macroCardValue}>
              {formatMacroValue(protein, proteinTarget, unit)}
            </span>
          </Stack>
        </Card>

        <Card shadow="sm" className={`${gradients.macroFat} ${macroCard}`}>
          <Stack gap="xs" align="center" className={macroCardContent}>
            <span>{tCommon('macroNutrients.fat')}</span>
            <span className={macroCardValue}>
              {formatMacroValue(fat, fatTarget, unit)}
            </span>
          </Stack>
        </Card>

        <Card shadow="sm" className={`${gradients.macroCarbs} ${macroCard}`}>
          <Stack gap="xs" align="center" className={macroCardContent}>
            <span>{tCommon('macroNutrients.carbs')}</span>
            <span className={macroCardValue}>
              {formatMacroValue(carbs, carbsTarget, unit)}
            </span>
          </Stack>
        </Card>
      </div>
    </Card>
  );
};
