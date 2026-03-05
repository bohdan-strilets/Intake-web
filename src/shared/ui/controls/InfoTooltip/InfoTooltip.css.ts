import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

const tooltipFadeScaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0.96)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
});

const tooltipFadeScaleOut = keyframes({
  '0%': { opacity: 1, transform: 'scale(1)' },
  '100%': { opacity: 0, transform: 'scale(0.96)' },
});

export const root = style({
  position: 'relative',
  display: 'inline-flex',
  verticalAlign: 'middle',
});

export const trigger = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    appearance: 'none',
    margin: 0,
    padding: 0,
    background: 'transparent',
    border: `1px solid ${vars.colors.borderMuted}`,
    borderRadius: vars.radius.full,

    font: 'inherit',
    color: vars.colors.textSecondary,

    cursor: 'pointer',
    userSelect: 'none',

    transition:
      'background-color 200ms ease, color 200ms ease, border-color 200ms ease',

    selectors: {
      '&:focus-visible': {
        outline: `2px dotted ${vars.colors.accentPrimary}`,
        outlineOffset: '2px',
      },
    },
  },

  variants: {
    size: {
      sm: {
        width: 18,
        height: 18,
        fontSize: 11,
        fontWeight: vars.typography.fontWeight.medium,
      },
      md: {
        width: 22,
        height: 22,
        fontSize: 13,
        fontWeight: vars.typography.fontWeight.medium,
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
});

/** Wrapper: прив’язаний до тригера; за замовчуванням — унизу справа (не накриває кнопку) */
export const tooltip = recipe({
  base: {
    position: 'absolute',
    zIndex: vars.zIndex.tooltip,
    right: 0,
    animation: `${tooltipFadeScaleIn} 180ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
  },
  variants: {
    position: {
      top: {
        bottom: '100%',
        marginBottom: 6,
      },
      bottom: {
        top: '100%',
        marginTop: 6,
      },
    },

    closing: {
      true: {
        animation: `${tooltipFadeScaleOut} 120ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
      },
    },
  },

  defaultVariants: {
    position: 'bottom',
    closing: false,
  },
});

/** Inner box: background, padding — content stays clearly inside */
export const tooltipInner = style({
  boxSizing: 'border-box',
  display: 'block',
  width: 'max-content',
  minWidth: 200,
  maxWidth: 300,
  padding: 12,

  background: vars.colors.backgroundSurface,
  color: vars.colors.textSecondary,
  fontSize: vars.typography.fontSize.sm,
  lineHeight: vars.typography.lineHeight.relaxed,

  borderRadius: vars.radius.md,
  boxShadow: vars.shadows.md,
  border: `1px solid ${vars.colors.borderMuted}`,
});
