import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { HTMLAttributes, ReactNode } from 'react';

import type { root } from './Title/Title.css';

export type TitleVariants = RecipeVariants<typeof root>;
export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type TitleProps = TitleVariants &
  Omit<HTMLAttributes<HTMLHeadingElement>, 'className'> & {
    children: ReactNode;

    level: TitleLevel;
    className?: string;
  };
