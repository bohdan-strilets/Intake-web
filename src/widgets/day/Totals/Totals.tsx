import { useTranslation } from '@shared/i18n';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { TotalsProps } from './Totals.types';

export const Totals = ({
  calories = 0,
  protein = 0,
  fat = 0,
  carbs = 0,
}: TotalsProps) => {
  const { t: tCommon } = useTranslation('common');

  return (
    <Card shadow="sm">
      <Inline align="baseline">
        <Paragraph tone="accentPrimary" weight="bold" size="display">
          {calories}
        </Paragraph>
        <Paragraph weight="medium" size="lg" tone="muted">
          {tCommon('macroNutrients.calories')}
        </Paragraph>
      </Inline>

      <Inline justify="between">
        <Card tone="accentSoft" shadow="sm">
          <Inline gap="xs">
            <Paragraph size="sm">{tCommon('macroNutrients.protein')}</Paragraph>
            <Paragraph weight="bold" size="sm">
              {protein}
              {tCommon('units.gramsShort')}
            </Paragraph>
          </Inline>
        </Card>
        <Card tone="accentSoft" shadow="sm">
          <Inline gap="xs">
            <Paragraph size="sm">{tCommon('macroNutrients.fat')}</Paragraph>
            <Paragraph weight="bold" size="sm">
              {fat}
              {tCommon('units.gramsShort')}
            </Paragraph>
          </Inline>
        </Card>
        <Card tone="accentSoft" shadow="sm">
          <Inline gap="xs">
            <Paragraph size="sm">{tCommon('macroNutrients.carbs')}</Paragraph>
            <Paragraph weight="bold" size="sm">
              {carbs}
              {tCommon('units.gramsShort')}
            </Paragraph>
          </Inline>
        </Card>
      </Inline>
    </Card>
  );
};
