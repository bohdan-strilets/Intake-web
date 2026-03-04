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

/* Приховати стрілки на number input у всіх браузерах */
globalStyle(
  'input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button',
  {
    WebkitAppearance: 'none',
    appearance: 'none',
    margin: 0,
  },
);
globalStyle('input[type="number"]', {
  MozAppearance: 'textfield',
});

globalStyle('::selection', {
  backgroundColor: vars.colors.accentSoft,
  color: vars.colors.textOnAccent,
});

globalStyle('input[type="range"]::-webkit-slider-runnable-track', {
  height: 4,
  borderRadius: vars.radius.full,
  backgroundColor: vars.colors.backgroundSecondary,
});

globalStyle('input[type="range"]::-webkit-slider-thumb', {
  WebkitAppearance: 'none',
  appearance: 'none',
  width: 16,
  height: 16,
  marginTop: -6,
  borderRadius: vars.radius.full,
  backgroundColor: vars.colors.accentPrimary,
  boxShadow: vars.shadows.sm,
  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
});

globalStyle('input[type="range"]:hover::-webkit-slider-thumb', {
  boxShadow: vars.shadows.sm,
});

globalStyle('input[type="range"]:active::-webkit-slider-thumb', {
  transform: 'scale(0.96)',
});

globalStyle('input[type="range"]:disabled::-webkit-slider-thumb', {
  cursor: 'not-allowed',
  opacity: 0.8,
});

globalStyle('input[type="range"]::-moz-range-track', {
  height: 4,
  borderRadius: vars.radius.full,
  backgroundColor: vars.colors.backgroundSecondary,
});

globalStyle('input[type="range"]::-moz-range-thumb', {
  width: 16,
  height: 16,
  border: 'none',
  borderRadius: vars.radius.full,
  backgroundColor: vars.colors.accentPrimary,
  boxShadow: vars.shadows.sm,
  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
});

globalStyle('input[type="range"]:hover::-moz-range-thumb', {
  boxShadow: vars.shadows.sm,
});

globalStyle('input[type="range"]:active::-moz-range-thumb', {
  transform: 'scale(0.96)',
});

globalStyle('input[type="range"]:disabled::-moz-range-thumb', {
  cursor: 'not-allowed',
  opacity: 0.8,
});

/* Sonner: плавний вхід/вихід тостів, наш easing, 350ms */
globalStyle(
  '[data-sonner-toast]',
  {
    transition:
      'transform 350ms cubic-bezier(0.22, 1, 0.36, 1), opacity 350ms cubic-bezier(0.22, 1, 0.36, 1), height 350ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 200ms cubic-bezier(0.22, 1, 0.36, 1)',
  },
);
