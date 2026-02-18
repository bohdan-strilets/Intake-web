import { Grid } from '@shared/ui/layout/Grid';

import { CalendarCell } from '../CalendarCell';

import type { MonthCalendarProps } from './types/props.type';

export const MonthCalendar = ({
  matrix,
  onDayClick,
  caloriesByDate,
  targetCalories,
}: MonthCalendarProps) => {
  return (
    <Grid columns={7} gap="sm">
      {matrix.flat().map((cell, index) => (
        <CalendarCell
          key={cell.date ?? `empty-${index}`}
          cell={cell}
          onClick={onDayClick}
          calories={cell.date ? caloriesByDate?.[cell.date] : undefined}
          targetCalories={targetCalories}
        />
      ))}
    </Grid>
  );
};
