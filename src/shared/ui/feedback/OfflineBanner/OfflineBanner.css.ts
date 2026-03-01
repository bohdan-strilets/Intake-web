import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const root = style({
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  zIndex: vars.zIndex.header,

  padding: vars.spacing.sm,
  paddingTop: `calc(${vars.spacing.sm} + env(safe-area-inset-top, 0px))`,

  backgroundColor: vars.colors.warningSoft,
  color: vars.colors.warning,

  fontSize: vars.typography.fontSize.sm,
  fontWeight: vars.typography.fontWeight.medium,
  textAlign: 'center',
});
