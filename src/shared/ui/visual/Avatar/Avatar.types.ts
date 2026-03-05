import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { HTMLAttributes } from 'react';

import type { root } from './Avatar.css';

export type AvatarVariants = RecipeVariants<typeof root>;

export type AvatarProps = AvatarVariants &
  Omit<HTMLAttributes<HTMLSpanElement>, 'children'> & {
    /** Name used to derive the initial letter (first character, uppercased) */
    name: string;
  };
