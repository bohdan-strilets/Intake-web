import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const progressTrack = style({
  height: 12,
  minHeight: 12,
  width: '100%',
  backgroundColor: vars.colors.backgroundSecondary,
  borderRadius: vars.radius.full,
  overflow: 'hidden',
});

export const progressFill = style({
  height: '100%',
  minWidth: 0,
  borderRadius: vars.radius.full,
  background: `linear-gradient(90deg, ${vars.colors.accentPrimary} 0%, ${vars.colors.accentSoft} 100%)`,
  transition: 'width 0.25s ease-out',
});
