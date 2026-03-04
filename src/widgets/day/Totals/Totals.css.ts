import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoints } from '@shared/styles/breakpoints';
import { vars } from '@shared/styles/contract';

/** Ряд карток макросів: flex + gap між картками, картки на однакову ширину */
export const macroCardsRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: vars.spacing.sm,
  width: '100%',
});

/** Одна картка макросу — займає доступну ширину (flex: 1) */
export const macroCard = style({
  flex: 1,
  minWidth: 0,
});

/** На мобільних — менший padding всередині картки макросу (контейнер Card) */
globalStyle(`${macroCard} > *`, {
  '@media': {
    [`screen and (max-width: ${breakpoints.md - 1}px)`]: {
      padding: vars.spacing.xs,
    },
  },
});

/** Контейнер картки макросу: дві стрічки, текст по центру */
export const macroCardContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.xs,
  textAlign: 'center',
  color: '#FFFFFF',
  fontSize: vars.typography.fontSize.xs,
  fontWeight: vars.typography.fontWeight.regular,
  lineHeight: vars.typography.lineHeight.normal,
});

/** Друга стрічка — значення (факт/ціль), жирніше */
export const macroCardValue = style({
  fontWeight: vars.typography.fontWeight.bold,
});

/** Число калорій: у світлій темі чорний, у темній — білий (textPrimary) */
export const caloriesNumber = style({
  color: vars.colors.textPrimary,
});
