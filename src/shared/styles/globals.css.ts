import { globalStyle } from '@vanilla-extract/css';

import { vars } from './contract';

globalStyle('html, body', {
  height: '100%',
});

globalStyle('body', {
  minHeight: '100%',

  fontFamily: vars.typography.fontFamily.base,
  fontSize: vars.typography.fontSize.md,
  lineHeight: vars.typography.lineHeight.relaxed,

  backgroundColor: vars.colors.backgroundPrimary,
  color: vars.colors.textPrimary,

  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontWeight: vars.typography.fontWeight.medium,
  lineHeight: vars.typography.lineHeight.normal,
});

globalStyle(':focus-visible', {
  outline: `2px solid ${vars.colors.accentPrimary}`,
  outlineOffset: '2px',
});

globalStyle('::selection', {
  backgroundColor: vars.colors.accentSoft,
  color: vars.colors.textOnAccent,
});
