import { Button } from '@shared/ui/controls/Button';
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
      <Paragraph>{calories ?? ''}</Paragraph>
      <div>{cell.dayNumber}</div>
    </Button>
  );
};
