/** Перехід між екранами: fade + мінімальний y (4–8px) */
export const page = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 6 },
} as const;
