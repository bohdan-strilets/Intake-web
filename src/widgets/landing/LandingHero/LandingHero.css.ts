import { keyframes, style } from '@vanilla-extract/css';

import { breakpoints } from '@shared/styles/breakpoints';
import { vars } from '@shared/styles/contract';

const orbPulse = keyframes({
  '0%, 100%': { opacity: 0.4, transform: 'translateX(-50%) scale(1)' },
  '50%': { opacity: 0.6, transform: 'translateX(-50%) scale(1.08)' },
});

export const root = style({
  position: 'relative',
  overflow: 'hidden',
});

export const gradientOrb = style({
  position: 'absolute',
  width: 'min(90vw, 400px)',
  height: 'min(90vw, 400px)',
  borderRadius: '50%',
  filter: 'blur(80px)',
  opacity: 0.4,
  pointerEvents: 'none',
  top: '-20%',
  left: '50%',
  transform: 'translateX(-50%)',
  background: `radial-gradient(circle, ${vars.colors.accentSoft} 0%, transparent 70%)`,
  animation: `${orbPulse} 8s ease-in-out infinite`,
  '@media': {
    [`screen and (min-width: ${breakpoints.md}px)`]: {
      width: 480,
      height: 480,
      top: '-10%',
      opacity: 0.5,
    },
  },
});

export const content = style({
  position: 'relative',
  zIndex: 1,
});

export const headline = style({
  letterSpacing: '-0.02em',
  '@media': {
    [`screen and (min-width: ${breakpoints.md}px)`]: {
      letterSpacing: '-0.03em',
    },
  },
});

const mockupFloat = keyframes({
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-6px)' },
});

export const mockup = style({
  borderRadius: vars.radius.xl,
  boxShadow: vars.shadows.lg,
  overflow: 'hidden',
  border: `1px solid ${vars.colors.borderMuted}`,
  background: vars.colors.backgroundSurface,
  maxWidth: 320,
  marginLeft: 'auto',
  marginRight: 'auto',
  animation: `${mockupFloat} 4s ease-in-out infinite`,
  '@media': {
    [`screen and (min-width: ${breakpoints.md}px)`]: {
      maxWidth: 400,
      boxShadow: vars.shadows.xl,
    },
  },
});

export const mockupBar = style({
  height: 40,
  background: vars.colors.backgroundSecondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `1px solid ${vars.colors.borderMuted}`,
});

export const mockupBody = style({
  padding: vars.spacing.lg,
  minHeight: 200,
});

export const mockupInput = style({
  width: '100%',
  padding: `${vars.spacing.md} ${vars.spacing.lg}`,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.colors.borderMuted}`,
  background: vars.colors.backgroundPrimary,
  fontFamily: vars.typography.fontFamily.base,
  fontSize: vars.typography.fontSize.sm,
  color: vars.colors.textPrimary,
  marginBottom: vars.spacing.md,
  '::placeholder': {
    color: vars.colors.textMuted,
  },
});

export const mockupChip = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  borderRadius: vars.radius.full,
  background: vars.colors.accentSoft,
  color: vars.colors.textPrimary,
  fontSize: vars.typography.fontSize.xs,
  fontWeight: vars.typography.fontWeight.medium,
});
