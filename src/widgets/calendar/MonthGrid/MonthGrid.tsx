import { Grid } from '@shared/ui/layout/Grid';

import { Cell } from '../Cell';

import type { MonthGridProps } from './MonthGrid.types';

export const MonthGrid = ({
  matrix,
  onDayClick,
  caloriesByDate,
  targetCalories,
}: MonthGridProps) => {
  return (
    <Grid columns={7} gap="sm">
      {matrix.flat().map((cell, index) => (
        <Cell
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
