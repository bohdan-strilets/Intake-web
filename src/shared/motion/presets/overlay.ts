import { slowTransition } from '../transitions';

export const backdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: slowTransition,
} as const;
