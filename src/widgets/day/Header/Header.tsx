import { useTranslation } from '@shared/i18n';
import { formatDisplayDate, getRelativeDayLabel } from '@shared/lib/date';
import { gradients } from '@shared/styles/gradients.css';
import { Button } from '@shared/ui/controls/Button';
import { Icon } from '@shared/ui/controls/Icon';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

import type { HeaderProps } from './Header.types';

export const Header = ({ date, onPrevDay, onNextDay }: HeaderProps) => {
  const { t } = useTranslation('calendar');

  const relativeLabel = getRelativeDayLabel(date);
  const showNav = Boolean(onPrevDay ?? onNextDay);

  return (
    <Card gap="xs" shadow="sm" className={gradients.header}>
      <Inline gap="md" align="center" justify="between">
        {showNav ? (
          <Button
            onClick={onPrevDay}
            size="sm"
            variant="secondary"
            aria-label={t('day.prevDay')}
            disabled={!onPrevDay}
          >
            <Icon name="chevronLeft" />
          </Button>
        ) : (
          <span />
        )}

        <Stack gap="xs" align="center">
          {relativeLabel && (
            <Paragraph weight="medium" tone="muted">
              {t(`relative.${relativeLabel}`)}
            </Paragraph>
          )}
          <Title level={1} size="xl">
            {formatDisplayDate(date)}
          </Title>
        </Stack>

        {showNav ? (
          <Button
            onClick={onNextDay}
            size="sm"
            variant="secondary"
            aria-label={t('day.nextDay')}
            disabled={!onNextDay}
          >
            <Icon name="chevronRight" />
          </Button>
        ) : (
          <span />
        )}
      </Inline>
    </Card>
  );
};
