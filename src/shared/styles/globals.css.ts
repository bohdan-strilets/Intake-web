import { globalStyle } from '@vanilla-extract/css';

import { vars } from './contract';

globalStyle(
  'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active',
  {
    WebkitBoxShadow: `0 0 0 1000px ${vars.colors.backgroundSurface} inset !important`,
    WebkitTextFillColor: `${vars.colors.textPrimary} !important`,
    caretColor: vars.colors.textPrimary,
    transition: 'background-color 9999s ease-out 0s',
  },
);

globalStyle('body, button, input, textarea, div, section', {
  transition: `
    background-color 180ms ease,
    color 180ms ease,
    border-color 180ms ease
  `,
});

globalStyle('.no-theme-transition *', {
  transition: 'none !important',
});

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
  outline: `2px dotted ${vars.colors.accentPrimary}`,
  outlineOffset: '4px',
});

globalStyle('::selection', {
  backgroundColor: vars.colors.accentSoft,
  color: vars.colors.textOnAccent,
});
