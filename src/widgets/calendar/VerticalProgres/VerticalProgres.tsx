import { motion } from 'framer-motion';

import { slowTransition } from '@shared/motion';

import { root } from './VerticalProgres.css';
import type { VerticalProgresProps } from './VerticalProgres.types';

export const VerticalProgres = ({ isOver, percent }: VerticalProgresProps) => {
  return (
    <motion.div
      className={root({ isOver })}
      animate={{ height: `${percent}%` }}
      transition={slowTransition}
    />
  );
};
