import { Grid } from '@shared/ui/layout/Grid';

import { CalendarDay } from '../CalendarDay';
import { CalendarWeekHeader } from '../CalendarWeekHeader';

import type { CalendarProps } from './Calendar.type';

export const Calendar = ({
  matrix,
  onDayClick,
  showWeekDays = true,
  caloriesByDate,
}: CalendarProps) => {
  return (
    <>
      {showWeekDays && <CalendarWeekHeader />}

      <Grid columns={7} gap="sm">
        {matrix.flat().map((cell, index) => (
          <CalendarDay
            key={index}
            cell={cell}
            onClick={onDayClick}
            calories={cell.date ? caloriesByDate?.[cell.date] : undefined}
          />
        ))}
      </Grid>
    </>
  );
};
