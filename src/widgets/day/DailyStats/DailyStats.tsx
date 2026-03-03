import { useTranslation } from '@shared/i18n';
import { cardGradients } from '@shared/styles/gradients.css';
import { Progress } from '@shared/ui/feedback/Progress';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { AnimatedNumber } from '@shared/ui/motion/AnimatedNumber';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { DailyStatsProps } from './DailyStats.types';

export const DailyStats = ({ consumed, target }: DailyStatsProps) => {
  const { t: tDay } = useTranslation('day');
  const { t: tCommon } = useTranslation('common');

  const remaining = Math.max(0, target - consumed);
  const exceededBy = consumed > target ? consumed - target : 0;
  const isExceeded = exceededBy > 0;

  return (
    <Card gap="md" shadow="sm" className={cardGradients.dailyIntake}>
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

      {isExceeded ? (
        <Inline justify="between">
          <Paragraph size="sm">{tDay('summary.exceededBy')}</Paragraph>
          <Paragraph weight="medium" tone="warning">
            <AnimatedNumber value={exceededBy} />
            {tCommon('units.cal')}
          </Paragraph>
        </Inline>
      ) : (
        <Inline justify="between">
          <Paragraph size="sm">{tDay('summary.remaining')}</Paragraph>
          <Paragraph weight="medium">
            <AnimatedNumber value={remaining} />
            {tCommon('units.cal')}
          </Paragraph>
        </Inline>
      )}
    </Card>
  );
};
