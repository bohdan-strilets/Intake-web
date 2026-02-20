import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const root = style({
  position: 'relative',
  width: 52,
  height: 28,
  borderRadius: vars.radius.full,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: `1px solid ${vars.colors.borderMuted}`,
  backgroundColor: vars.colors.backgroundSecondary,

  cursor: 'pointer',
  padding: 0,
  overflow: 'hidden',

  transition: 'background-color 0.2s ease',
});
