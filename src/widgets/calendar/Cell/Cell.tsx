import { useTranslation } from '@shared/i18n';
import { Button } from '@shared/ui/controls/Button';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { VerticalProgres } from '../VerticalProgres';

import { content, root } from './Cell.css';
import type { CellProps } from './Cell.type';

export const Cell = ({
  cell,
  onClick,
  calories,
  targetCalories,
}: CellProps) => {
  const { t: tCommon } = useTranslation('common');

  const { date } = cell;

  if (!date) return <div aria-hidden />;

  const handleClick = () => onClick?.(date);

  const progress =
    typeof calories === 'number' &&
    typeof targetCalories === 'number' &&
    targetCalories > 0
      ? Math.min(calories / targetCalories, 1.2)
      : 0;

  const normalizedProgress = Math.min(progress, 1);
  const percent =
    normalizedProgress > 0 ? Math.max(6, normalizedProgress * 100) : 0;

  const isOver = progress > 1;

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={handleClick}
      disabled={!cell.isCurrentMonth}
      className={root({ isToday: cell.isToday })}
    >
      {progress > 0 && <VerticalProgres isOver={isOver} percent={percent} />}

      <Stack gap="xs" align="center" className={content}>
        <Paragraph
          align="center"
          size={cell.isToday ? 'md' : 'sm'}
          weight={cell.isToday ? 'bold' : 'medium'}
        >
          {cell.dayNumber}
        </Paragraph>

        <Paragraph align="center" size="xs">
          {typeof calories === 'number' ? calories : '–'}
        </Paragraph>

        <Paragraph align="center" size="xs">
          {tCommon('units.kcal')}
        </Paragraph>
      </Stack>
    </Button>
  );
};
