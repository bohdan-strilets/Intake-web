import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { caloriesValue } from './DayTotals.css';
import type { DayTotalsProps } from './DayTotals.types';

export const DayTotals = ({
  calories = 0,
  protein = 0,
  fat = 0,
  carbs = 0,
}: DayTotalsProps) => {
  return (
    <Card>
      <Inline align="baseline">
        <Paragraph tone="accentPrimary" weight="bold" className={caloriesValue}>
          {calories}
        </Paragraph>
        <Paragraph weight="medium" size="lg" tone="muted">
          calories
        </Paragraph>
      </Inline>

      <Inline justify="between">
        <Card tone="accentSoft" shadow="sm">
          <Inline gap="xs">
            <Paragraph size="sm">Protein</Paragraph>
            <Paragraph weight="bold" size="sm">
              {protein}g
            </Paragraph>
          </Inline>
        </Card>
        <Card tone="accentSoft" shadow="sm">
          <Inline gap="xs">
            <Paragraph size="sm">Fat</Paragraph>
            <Paragraph weight="bold" size="sm">
              {fat}g
            </Paragraph>
          </Inline>
        </Card>
        <Card tone="accentSoft" shadow="sm">
          <Inline gap="xs">
            <Paragraph size="sm">Carbs</Paragraph>
            <Paragraph weight="bold" size="sm">
              {carbs}g
            </Paragraph>
          </Inline>
        </Card>
      </Inline>
    </Card>
  );
};
