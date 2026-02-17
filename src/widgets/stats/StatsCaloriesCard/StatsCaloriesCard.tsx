import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { StatsCaloriesCardProps } from './StatsCaloriesCard.types';

export const StatsCaloriesCard = ({
  caloriesAverage,
  caloriesGoal,
  caloriesDelta,
}: StatsCaloriesCardProps) => {
  const calorieTone =
    caloriesDelta > 0 ? 'warning' : caloriesDelta < 0 ? 'success' : 'secondary';

  return (
    <Card shadow="sm" tone="accentSoft">
      <Paragraph align="center">Average per day</Paragraph>

      <Paragraph weight="bold" size="display" align="center">
        {caloriesAverage}
      </Paragraph>

      <Stack>
        <Paragraph align="center" size="sm" tone="muted">
          {caloriesGoal} kcal per day
        </Paragraph>
        <Paragraph size="lg" align="center" weight="bold" tone={calorieTone}>
          {caloriesDelta === 0
            ? 'On target'
            : `${caloriesDelta > 0 ? '+' : ''}${caloriesDelta} kcal vs goal`}
        </Paragraph>
      </Stack>
    </Card>
  );
};
