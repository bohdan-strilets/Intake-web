import type { RecipeVariants } from '@vanilla-extract/recipes';

import type { root } from './Divider.css';

export type DividerVariants = RecipeVariants<typeof root>;

export type DividerProps = DividerVariants & {
  className?: string;
};
