import { fadeTransition } from '../transitions';

export const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: fadeTransition },
  exit: { opacity: 0, transition: fadeTransition },
} as const;

/** fade + невеликий translateY (4–8px), без великих зсувів */
export const fadeUp = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 6 },
} as const;

/** Дуже м’який tap (без різкого scale, без bounce) */
export const tapScale = {
  whileTap: { scale: 0.99 },
} as const;

/** Центровані модалки: без scale, тільки fade + невеликий y */
export const fadeUpModal = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 6 },
} as const;

/** Нижній sheet: в’їзд знизу, обмежений y (не 32px+) */
export const sheetUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 16 },
} as const;

/** @deprecated Використовуй fadeUp або fadeUpModal. Збережено для сумісності. */
export const slideUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 8 },
} as const;

/** @deprecated Використовуй fadeUpModal. Без scale, тільки fade + y. */
export const scaleIn = fadeUpModal;
