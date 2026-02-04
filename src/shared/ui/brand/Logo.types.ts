import type { RecipeVariants } from '@vanilla-extract/recipes';

import type { root } from './Logo.css';

export type LogoVariants = RecipeVariants<typeof root>;

export type LogoProps = LogoVariants & {
  className?: string;
};
