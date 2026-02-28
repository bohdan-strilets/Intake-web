import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const wrapper = style({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
});

export const trigger = recipe({
  base: {
    width: '100%',
    padding: `${vars.spacing.sm} ${vars.spacing.md}`,

    backgroundColor: vars.colors.backgroundSurface,
    color: vars.colors.textPrimary,

    borderRadius: vars.radius.md,
    border: `1px solid ${vars.colors.borderMuted}`,

    fontFamily: vars.typography.fontFamily.base,
    fontSize: vars.typography.fontSize.md,

    textAlign: 'left',
    cursor: 'pointer',

    selectors: {
      '&:focus': {
        outline: 'none',
        borderColor: vars.colors.accentPrimary,
      },

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    size: {
      sm: {
        height: vars.layout.controlHeight.sm,
        fontSize: vars.typography.fontSize.sm,
      },
      md: {
        height: vars.layout.controlHeight.md,
        fontSize: vars.typography.fontSize.md,
      },
      lg: {
        height: vars.layout.controlHeight.lg,
        fontSize: vars.typography.fontSize.md,
      },
    },

    error: {
      true: {
        borderColor: vars.colors.danger,
      },
    },
  },

  defaultVariants: {
    size: 'md',
    error: false,
  },
});

export const list = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  zIndex: vars.zIndex.dropdown,

  maxHeight: '280px',
  padding: 0,
  marginTop: vars.spacing.xs,
  backgroundColor: vars.colors.backgroundSurface,

  borderRadius: vars.radius.md,
  border: `1px solid ${vars.colors.borderMuted}`,
  boxShadow: vars.shadows.md,

  overflowY: 'auto',
  transformOrigin: 'top',
});

export const item = style({
  listStyle: 'none',
});

export const optionContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: vars.spacing.xs,
  minWidth: 0,
});

export const optionDescription = style({
  fontSize: vars.typography.fontSize.sm,
  color: vars.colors.textMuted,
  fontWeight: vars.typography.fontWeight.regular,
  lineHeight: 1.3,
});

export const optionBtn = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: vars.spacing.sm,

    width: '100%',
    padding: vars.spacing.md,

    background: 'none',
    border: 'none',
    color: vars.colors.textPrimary,

    textAlign: 'left',
    font: 'inherit',

    cursor: 'pointer',

    selectors: {
      '&:hover': {
        backgroundColor: vars.colors.backgroundSecondary,
      },

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    selected: {
      true: {
        backgroundColor: vars.colors.accentSoft,
        fontWeight: vars.typography.fontWeight.medium,
      },
    },

    active: {
      true: {
        backgroundColor: vars.colors.backgroundSecondary,
      },
    },
  },
});
