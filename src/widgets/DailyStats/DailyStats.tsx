import { Progress } from '@shared/ui/feedback/Progress';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { DailyStatsProps } from './DailyStats.types';

export const DailyStats = ({ consumed, target }: DailyStatsProps) => {
  const remaining = target - consumed;
  const isExceeded = remaining < 0;

  return (
    <Card gap="md">
      <Inline justify="between">
        <Paragraph size="sm">Daily Goal</Paragraph>
        <Paragraph weight="medium">{target}cal</Paragraph>
      </Inline>
      <Progress value={consumed} target={target} unit="calories" />
      <Inline justify="between">
        <Paragraph size="sm">Remaining</Paragraph>
        <Paragraph weight="medium" tone={isExceeded ? 'warning' : 'default'}>
          {isExceeded ? `${Math.abs(remaining)} cal` : `${remaining} cal`}
        </Paragraph>
      </Inline>
    </Card>
  );
};
