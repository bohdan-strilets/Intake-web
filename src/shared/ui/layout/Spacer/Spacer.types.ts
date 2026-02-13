import type { RecipeVariants } from '@vanilla-extract/recipes';

import type { root } from './Spacer.css';

export type SpacerVariants = RecipeVariants<typeof root>;

export type SpacerProps = SpacerVariants & {};
