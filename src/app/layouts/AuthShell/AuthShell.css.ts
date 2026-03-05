import { style } from '@vanilla-extract/css';

import { breakpoints } from '@shared/styles/breakpoints';
import { vars } from '@shared/styles/contract';

export const root = style({
  display: 'flex',
  flexDirection: 'column',

  minHeight: '100dvh',
  background: vars.colors.backgroundSecondary,
});

export const headerSection = style({
  flexShrink: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  paddingTop: `max(env(safe-area-inset-top), ${vars.spacing.lg})`,
  paddingLeft: vars.spacing.md,
  paddingRight: vars.spacing.md,
  paddingBottom: vars.spacing.lg,

  '@media': {
    [`screen and (min-width: ${breakpoints.md}px)`]: {
      paddingLeft: vars.spacing.xl,
      paddingRight: vars.spacing.xl,
      paddingBottom: vars.spacing.xl,
    },
    [`screen and (min-width: ${breakpoints.lg}px)`]: {
      paddingBottom: vars.spacing['2xl'],
    },
  },
});

export const main = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',

  width: '100%',
  minHeight: 0,

  paddingLeft: vars.spacing.md,
  paddingRight: vars.spacing.md,
  paddingBottom: vars.spacing.xl,

  '@media': {
    [`screen and (min-width: ${breakpoints.md}px)`]: {
      paddingLeft: vars.spacing.xl,
      paddingRight: vars.spacing.xl,
      paddingBottom: vars.spacing['2xl'],
      justifyContent: 'center',
    },
    [`screen and (min-width: ${breakpoints.lg}px)`]: {
      paddingLeft: vars.spacing['2xl'],
      paddingRight: vars.spacing['2xl'],
      paddingBottom: vars.spacing['3xl'],
    },
  },
});

export const contentWrap = style({
  width: '100%',
  maxWidth: '100%',

  '@media': {
    [`screen and (min-width: ${breakpoints.md}px)`]: {
      maxWidth: '440px',
    },
    [`screen and (min-width: ${breakpoints.lg}px)`]: {
      maxWidth: '480px',
    },
  },
});
