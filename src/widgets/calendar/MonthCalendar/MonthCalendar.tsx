import { Grid } from '@shared/ui/layout/Grid';

import { CalendarCell } from '../CalendarCell';
import { CalendarWeekDays } from '../CalendarWeekDays';

import type { MonthCalendarProps } from './types/props.type';

export const MonthCalendar = ({
  matrix,
  onDayClick,
  showWeekDays = true,
  caloriesByDate,
}: MonthCalendarProps) => {
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
