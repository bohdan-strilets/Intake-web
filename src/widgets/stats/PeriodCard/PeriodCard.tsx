import { useTranslation } from '@shared/i18n';
import { formatDisplayDate } from '@shared/lib/date';
import { Button } from '@shared/ui/controls/Button';
import { Icon } from '@shared/ui/controls/Icon';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { PeriodCardProps } from './PeriodCard.types';

export const PeriodCard = ({
  periodStart,
  periodEnd,
  loggedDays,
  totalDays,
  onPrev,
  onNext,
}: PeriodCardProps) => {
  const { t } = useTranslation('stats');

  return (
    <Card shadow="sm">
      <Inline gap="md" align="center" justify="between">
        {onPrev ? (
          <Button
            variant="secondary"
            size="sm"
            aria-label={t('nav.prev')}
            onClick={onPrev}
          >
            <Icon name="chevronLeft" />
          </Button>
        ) : (
          <span />
        )}

        <Paragraph align="center" tone="muted">
          {formatDisplayDate(periodStart)} – {formatDisplayDate(periodEnd)}
        </Paragraph>

        {onNext ? (
          <Button
            variant="secondary"
            size="sm"
            aria-label={t('nav.next')}
            onClick={onNext}
          >
            <Icon name="chevronRight" />
          </Button>
        ) : (
          <span />
        )}
      </Inline>

      <Paragraph align="center">
        {t('progress.loggedDays', { logged: loggedDays, total: totalDays })}
      </Paragraph>
    </Card>
  );
};
