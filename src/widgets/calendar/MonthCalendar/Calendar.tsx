import { Grid } from '@shared/ui/layout/Grid';

import { CalendarCell } from '../CalendarCell';
import { CalendarWeekDays } from '../CalendarWeekDays';

import type { CalendarProps } from './types';

export const Calendar = ({
  matrix,
  onDayClick,
  showWeekDays = true,
  caloriesByDate,
}: CalendarProps) => {
  return (
    <>
      {showWeekDays && <CalendarWeekDays />}

      <Grid columns={7} gap="sm">
        {matrix.flat().map((cell, index) => (
          <CalendarCell
            key={cell.date ?? `empty-${index}`}
            cell={cell}
            onClick={onDayClick}
            calories={cell.date ? caloriesByDate?.[cell.date] : undefined}
          />
        ))}
      </Grid>
    </>
  );
};
