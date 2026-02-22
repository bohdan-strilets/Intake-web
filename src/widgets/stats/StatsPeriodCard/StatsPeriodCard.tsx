import { useTranslation } from '@shared/i18n';
import { formatDisplayDate } from '@shared/lib/date';
import { Card } from '@shared/ui/layout/Card';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { StatsPeriodCardProps } from './StatsPeriodCard.types';

export const StatsPeriodCard = ({
  periodStart,
  periodEnd,
  loggedDays,
  totalDays,
}: StatsPeriodCardProps) => {
  const { t } = useTranslation('stats');

  return (
    <Card shadow="sm">
      <Paragraph align="center" tone="muted">
        {formatDisplayDate(periodStart)} – {formatDisplayDate(periodEnd)}
      </Paragraph>

      <Paragraph align="center">
        {t('progress.loggedDays', { logged: loggedDays, total: totalDays })}
      </Paragraph>
    </Card>
  );
};
