import { style } from '@vanilla-extract/css';
import { styleVariants } from '@vanilla-extract/css';

import { vars } from './contract';

const gradientBase = {
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'local',
} as const;

/** Семантичні градієнти з design tokens. Використовувати через className. */
export const gradients = {
  header: style({
    ...gradientBase,
    backgroundImage: vars.gradients.header,
    backgroundSize: '100% 100%',
  }),
  surfaceSoft: style({
    ...gradientBase,
    backgroundImage: vars.gradients.surfaceSoft,
    backgroundSize: '100% 100%',
  }),
  dailySummary: style({
    ...gradientBase,
    backgroundImage: vars.gradients.dailySummary,
    backgroundSize: '100% 100%',
  }),
  accentSoft: style({
    ...gradientBase,
    backgroundImage: vars.gradients.accentSoft,
    backgroundSize: '100% 100%',
  }),
  accentButton: style({
    ...gradientBase,
    backgroundImage: vars.gradients.accentButton,
    backgroundSize: '100% 100%',
  }),
  statsCard: style({
    ...gradientBase,
    backgroundImage: vars.gradients.statsCard,
    backgroundSize: '100% 100%',
  }),
  emptyState: style({
    ...gradientBase,
    backgroundImage: vars.gradients.emptyState,
    backgroundSize: '100% 100%',
  }),
  macroProtein: style({
    ...gradientBase,
    backgroundImage: vars.gradients.macroProtein,
    backgroundSize: '100% 100%',
  }),
  macroFat: style({
    ...gradientBase,
    backgroundImage: vars.gradients.macroFat,
    backgroundSize: '100% 100%',
  }),
  macroCarbs: style({
    ...gradientBase,
    backgroundImage: vars.gradients.macroCarbs,
    backgroundSize: '100% 100%',
  }),
} as const;

/**
 * Карткові градієнти (зворотна сумісність + семантика).
 * dailyIntake → dailySummary token, calories → statsCard token.
 */
export const cardGradients = styleVariants({
  dailyIntake: {
    ...gradientBase,
    backgroundImage: vars.gradients.dailySummary,
    backgroundSize: '100% 100%',
  },
  calories: {
    ...gradientBase,
    backgroundImage: vars.gradients.statsCard,
    backgroundSize: '100% 100%',
  },
});
