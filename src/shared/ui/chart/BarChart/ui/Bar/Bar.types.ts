import type { RecipeVariants } from '@vanilla-extract/recipes';

import type { bar } from './Bar.css';

export type BarVariants = RecipeVariants<typeof bar>;
export type Tone = 'success' | 'danger' | 'neutral';

export type BarProps = BarVariants & {
  height: number;
  value: number | null;
};
