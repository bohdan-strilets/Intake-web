import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { HTMLAttributes } from 'react';

import type { root } from './Spinner.css';

export type SpinnerVariant = RecipeVariants<typeof root>;

export type SpinnerProps = HTMLAttributes<HTMLSpanElement> & SpinnerVariant;
