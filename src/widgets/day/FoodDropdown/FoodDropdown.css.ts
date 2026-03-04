import { style } from '@vanilla-extract/css';

/** Min 44×44px touch target for the menu trigger (accessibility) */
export const triggerTouchTarget = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 44,
  minHeight: 44,
});
