import { useTranslation } from '@shared/i18n';
import { gradients } from '@shared/styles/gradients.css';
import { Card } from '@shared/ui/layout/Card';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { WeightCardProps } from './WeightCard.types';

export const WeightCard = ({ weightDelta }: WeightCardProps) => {
  const { t: tStats } = useTranslation('stats');
  const { t: tCommon } = useTranslation('common');

  const weightTone = weightDelta > 0 ? 'warning' : 'success';

  return (
    <Card shadow="sm" className={gradients.surfaceSoft}>
      <Paragraph align="center" weight="medium">
        {tStats('summary.weightChange')}
      </Paragraph>
      <Paragraph align="center" weight="medium" tone={weightTone}>
        {weightDelta} {tCommon('units.kilograms')}
      </Paragraph>
    </Card>
  );
};
