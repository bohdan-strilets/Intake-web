import { useTranslation } from '@shared/i18n';
import { Card } from '@shared/ui/layout/Card';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { StatsWeightCardProps } from './StatsWeightCard.types';

export const StatsWeightCard = ({ weightDelta }: StatsWeightCardProps) => {
  const { t: tStats } = useTranslation('stats');
  const { t: tCommon } = useTranslation('common');

  const weightTone = weightDelta > 0 ? 'warning' : 'success';

  return (
    <Card shadow="sm">
      <Paragraph align="center" weight="medium">
        {tStats('summary.weightChange')}
      </Paragraph>
      <Paragraph align="center" weight="medium" tone={weightTone}>
        {weightDelta} {tCommon('units.kilograms')}
      </Paragraph>
    </Card>
  );
};
