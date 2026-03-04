import { fadeTransition } from '../transitions';

export const rotateChevron = {
  closed: { rotate: 0, transition: fadeTransition },
  open: { rotate: 180, transition: fadeTransition },
} as const;

/** Іконка календаря в DatePicker: легкий scale + поворот при відкритті */
export const calendarIcon = {
  closed: { scale: 1, rotate: 0, transition: fadeTransition },
  open: { scale: 1.08, rotate: 8, transition: fadeTransition },
} as const;
