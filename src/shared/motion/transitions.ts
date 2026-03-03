import { motionDurations, motionEase } from './config';

export const quickTransition = {
  duration: motionDurations.fast,
  ease: motionEase.smooth,
} as const;

export const fadeTransition = {
  duration: motionDurations.normal,
  ease: motionEase.smooth,
} as const;

export const slowTransition = {
  duration: motionDurations.slow,
  ease: motionEase.smooth,
} as const;

/** Переходи екранів і модалок: 350–450ms, без довгих 600+ */
export const screenTransition = {
  duration: motionDurations.screen,
  ease: motionEase.smooth,
} as const;
