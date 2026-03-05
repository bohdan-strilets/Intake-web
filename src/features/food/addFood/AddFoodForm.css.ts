import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

/** Wrapper for add-food hint tooltip content: spacing and typography (no extra padding — tooltip inner has it) */
export const hintContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,

  maxWidth: '100%',
  lineHeight: vars.typography.lineHeight.relaxed,
});

/** Секція підказки: заголовок + приклади */
export const hintSection = style({
  marginBottom: vars.spacing.md,

  selectors: {
    '&:last-of-type': {
      marginBottom: 0,
    },
  },
});

export const hintSectionLabel = style({
  fontWeight: vars.typography.fontWeight.medium,
  margin: 0,
  marginBottom: vars.spacing.xs,
});

/** Приклади під заголовком (кілька рядків) */
export const hintSectionExamples = style({
  margin: 0,
  paddingLeft: vars.spacing.md,
  whiteSpace: 'pre-line',
});

export const hintTitle = style({
  fontWeight: vars.typography.fontWeight.medium,
  margin: 0,
});

export const hintTip = style({
  margin: 0,
  marginTop: vars.spacing.xs,
  fontWeight: vars.typography.fontWeight.medium,
});

/** Row with submit button and voice button — stretch so both same height */
export const actionsRow = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing.sm,
  alignItems: 'stretch',
});

export const permissionNote = style({
  textAlign: 'right',
});
