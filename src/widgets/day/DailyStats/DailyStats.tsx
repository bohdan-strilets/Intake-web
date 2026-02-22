import { useTranslation } from '@shared/i18n';
import { Progress } from '@shared/ui/feedback/Progress';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { DailyStatsProps } from './DailyStats.types';

export const DailyStats = ({ consumed, target }: DailyStatsProps) => {
  const { t: tDay } = useTranslation('day');
  const { t: tCommon } = useTranslation('common');

  const remaining = target - consumed;
  const isExceeded = remaining < 0;

  return (
    <Card gap="md" shadow="sm">
      <Inline justify="between">
        <Paragraph size="sm">{tDay('summary.dailyGoal')}</Paragraph>
        <Paragraph weight="medium">
          {target} {tCommon('units.cal')}
        </Paragraph>
      </Inline>

      <Progress
        value={consumed}
        target={target}
        unit={tCommon('macroNutrients.calories')}
      />

      <Inline justify="between">
        <Paragraph size="sm">{tDay('summary.remaining')}</Paragraph>
        <Paragraph weight="medium" tone={isExceeded ? 'warning' : 'default'}>
          {isExceeded
            ? `${Math.abs(remaining)} ${tCommon('units.cal')}`
            : `${remaining} ${tCommon('units.cal')}`}
        </Paragraph>
      </Inline>
    </Card>
  );
};
