import { Card } from '@shared/ui/layout/Card';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { StatsWeightCardProps } from './StatsWeightCard.types';

export const StatsWeightCard = ({ weightDelta }: StatsWeightCardProps) => {
  const weightTone = weightDelta > 0 ? 'warning' : 'success';

  return (
    <Card shadow="sm">
      <Paragraph align="center" weight="medium">
        Weight change
      </Paragraph>
      <Paragraph align="center" weight="medium" tone={weightTone}>
        {weightDelta}kg
      </Paragraph>
    </Card>
  );
};
