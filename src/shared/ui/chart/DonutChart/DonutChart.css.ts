import { keyframes, style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

const donutEnter = keyframes({
  to: {
    opacity: 1,
    transform: 'scale(1)',
  },
});

/** Wrapper: fixed size, centered content, entrance animation */
export const wrapper = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: vars.radius.full,
  boxShadow: vars.shadows.sm,

  opacity: 0,
  transform: 'scale(0.95)',
  animation: `${donutEnter} 200ms ease-out forwards`,
});

/** Ring: conic-gradient or empty state via inline --donut-gradient */
export const ring = style({
  position: 'absolute',
  inset: 0,
  borderRadius: vars.radius.full,
  background: 'var(--donut-gradient)',
});

/** Empty state: single muted ring when total = 0; border width set inline */
export const ringEmpty = style({
  background: 'transparent',
  borderStyle: 'solid',
  borderColor: vars.colors.borderMuted,
  boxSizing: 'border-box',
});

/** Hole: inner circle using theme background */
export const hole = style({
  position: 'relative',
  borderRadius: vars.radius.full,
  backgroundColor: vars.colors.backgroundPrimary,
});
