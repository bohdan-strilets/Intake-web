import { fadeTransition } from '../transitions';

export const listContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0,
    },
  },
} as const;

/** Плавна поява елемента списку, translateY в межах 4–8px */
export const listItem = {
  initial: { opacity: 0, y: 6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: fadeTransition,
  },
  exit: {
    opacity: 0,
    y: 6,
    transition: fadeTransition,
  },
} as const;
