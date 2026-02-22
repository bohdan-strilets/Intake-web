import { useTranslation } from '@shared/i18n';
import { formatDisplayDate, getRelativeDayLabel } from '@shared/lib/date';
import { Card } from '@shared/ui/layout/Card';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

import type { DayHeaderProps } from './DayHeader.types';

export const DayHeader = ({ date }: DayHeaderProps) => {
  const { t } = useTranslation('calendar');

  const relativeLabel = getRelativeDayLabel(date);

  return (
    <Card gap="xs" shadow="sm">
      {relativeLabel && (
        <Paragraph weight="medium" tone="muted">
          {t(`relative.${relativeLabel}`)}
        </Paragraph>
      )}

      <Title level={1} size="xl">
        {formatDisplayDate(date)}
      </Title>
    </Card>
  );
};
