import { Button } from '@shared/ui/controls/Button';
import { Icon } from '@shared/ui/controls/Icon';
import { Inline } from '@shared/ui/layout/Inline';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { CalendarMonthHeaderProps } from './CalendarMonthHeader.types';

export const CalendarMonthHeader = ({
  label,
  onPrev,
  onNext,
}: CalendarMonthHeaderProps) => {
  return (
    <Inline gap="md" align="center" justify="between">
      <Button onClick={onPrev} size="sm" variant="secondary">
        <Icon icon="chevronLeft" />
      </Button>

      <Paragraph>{label}</Paragraph>

      <Button onClick={onNext} size="sm" variant="secondary">
        <Icon icon="chevronRight" />
      </Button>
    </Inline>
  );
};
