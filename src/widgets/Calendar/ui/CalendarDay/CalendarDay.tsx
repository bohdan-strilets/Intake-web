import { Button } from '@shared/ui/controls/Button';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { root } from './CalendarDay.css';
import type { CalendarDayProps } from './CalendarDay.type';

export const CalendarDay = ({ cell, onClick, calories }: CalendarDayProps) => {
  const { date } = cell;
  if (!date) return <div aria-hidden />;

  const handleClick = () => onClick?.(date);

  return (
    <Button
      type="button"
      variant="secondary"
      onClick={handleClick}
      disabled={!cell.isCurrentMonth}
      className={root({ isToday: cell.isToday })}
    >
      <Stack gap="xs">
        <Paragraph align="center" size="sm">
          {calories ?? ''}
        </Paragraph>
        <Paragraph align="center" size="sm" weight="medium">
          {cell.dayNumber}
        </Paragraph>
      </Stack>
    </Button>
  );
};
