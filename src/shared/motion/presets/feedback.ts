import { fadeTransition } from '../transitions';

export const rotateChevron = {
  closed: { rotate: 0, transition: fadeTransition },
  open: { rotate: 180, transition: fadeTransition },
} as const;
