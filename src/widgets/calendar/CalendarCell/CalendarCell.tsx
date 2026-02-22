import { useTranslation } from '@shared/i18n';
import { Button } from '@shared/ui/controls/Button';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { content, progressBar, root } from './CalendarCell.css';
import type { CalendarCellProps } from './CalendarCell.type';

export const CalendarCell = ({
  cell,
  onClick,
  calories,
  targetCalories,
}: CalendarCellProps) => {
  const { t: tCommon } = useTranslation('common');

  const { date } = cell;

  if (!date) return <div aria-hidden />;

  const handleClick = () => onClick?.(date);

  const progress =
    calories && targetCalories ? Math.min(calories / targetCalories, 1.2) : 0;

  const percent = progress > 0 ? Math.max(6, Math.min(progress, 1) * 100) : 0;

  const isOver = progress > 1;

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={handleClick}
      disabled={!cell.isCurrentMonth}
      className={root({ isToday: cell.isToday })}
    >
      {progress > 0 && (
        <div
          className={progressBar({ isOver })}
          style={{ height: `${percent}%` }}
        />
      )}

      <Stack gap="xs" align="center" className={content}>
        <Paragraph
          align="center"
          size={cell.isToday ? 'md' : 'sm'}
          weight={cell.isToday ? 'bold' : 'medium'}
        >
          {cell.dayNumber}
        </Paragraph>

        <Paragraph align="center" size="xs">
          {calories ?? 0}
        </Paragraph>

        <Paragraph align="center" size="xs">
          {tCommon('units.kcal')}
        </Paragraph>
      </Stack>
    </Button>
  );
};
