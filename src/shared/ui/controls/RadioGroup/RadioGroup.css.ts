import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const group = recipe({
  base: {
    display: 'flex',
    gap: vars.spacing.md,
  },
  variants: {
    direction: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: vars.spacing.lg,
      },
    },
  },
  defaultVariants: {
    direction: 'column',
  },
});

export const item = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    gap: vars.spacing.sm,
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
    userSelect: 'none',
    borderRadius: vars.radius.sm,
    outline: 'none',
    selectors: {
      '&:has(input:focus-visible)': {
        outline: `2px dotted ${vars.colors.accentPrimary}`,
        outlineOffset: '4px',
      },
    },
  },
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },
});

export const input = style({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  clipPath: 'inset(50%)',
  whiteSpace: 'nowrap',
  border: 0,
  opacity: 0,
  cursor: 'inherit',
});

export const dot = recipe({
  base: {
    flexShrink: 0,
    width: 20,
    height: 20,
    borderRadius: vars.radius.full,
    border: `2px solid ${vars.colors.borderMuted}`,
    background: vars.colors.backgroundSurface,
    transition: 'border-color 0.2s ease, background 0.2s ease',
  },
  variants: {
    checked: {
      true: {
        borderColor: vars.colors.accentPrimary,
        borderWidth: 6,
        background: vars.colors.backgroundSurface,
      },
    },
    invalid: {
      true: {
        borderColor: vars.colors.danger,
      },
    },
  },
  compoundVariants: [
    {
      variants: { checked: true, invalid: true },
      style: {
        borderColor: vars.colors.accentPrimary,
      },
    },
  ],
});

export const labelText = style({
  color: vars.colors.textPrimary,
  fontFamily: vars.typography.fontFamily.base,
  fontSize: vars.typography.fontSize.md,
  lineHeight: vars.typography.lineHeight.normal,
});
