/** Час в секундах. Мікро: 200–300ms, екрани: 350–450ms. */
export const motionDurations = {
  /** Мікро-взаємодія (focus, hover): ~200ms */
  fast: 0.2,
  /** Стандартна дія (кнопки, списки): ~250ms */
  normal: 0.25,
  /** Повільніший вихід/вхід: ~350ms */
  slow: 0.35,
  /** Перехід між екранами, модалки: 350–450ms */
  screen: 0.4,
} as const;

/** cubic-bezier(0.22, 1, 0.36, 1) — Apple-подібний smooth out. */
export const motionEase = {
  smooth: [0.22, 1, 0.36, 1] as [number, number, number, number],
} as const;

/** Для CSS transition-timing-function. */
export const motionEaseCss = 'cubic-bezier(0.22, 1, 0.36, 1)';
