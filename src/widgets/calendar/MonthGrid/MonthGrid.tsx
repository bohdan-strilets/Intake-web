import { motion } from 'framer-motion';

import { listContainer, listItem } from '@shared/motion';
import { Grid } from '@shared/ui/layout/Grid';

import { Cell } from '../Cell';

import type { MonthGridProps } from './MonthGrid.types';

export const MonthGrid = ({
  matrix,
  onDayClick,
  monthKey,
  caloriesByDate,
  targetCalories,
}: MonthGridProps) => {
  return (
    <motion.div
      key={monthKey}
      variants={listContainer}
      initial="initial"
      animate="animate"
    >
      <Grid columns={7} gap="sm">
        {matrix.flat().map((cell, index) => (
          <motion.div key={cell.date ?? `cell-${index}`} variants={listItem}>
            <Cell
              cell={cell}
              onClick={onDayClick}
              calories={cell.date ? caloriesByDate?.[cell.date] : undefined}
              targetCalories={targetCalories}
            />
          </motion.div>
        ))}
      </Grid>
    </motion.div>
  );
};
