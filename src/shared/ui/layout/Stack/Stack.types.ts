import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { HTMLAttributes, ReactNode } from 'react';

import type { root } from './Stack.css';

export type StackVariants = RecipeVariants<typeof root>;

type StackAs =
  | 'div'
  | 'section'
  | 'article'
  | 'main'
  | 'nav'
  | 'header'
  | 'footer'
  | 'aside'
  | 'ul'
  | 'ol'
  | 'li'
  | 'form';

export type Props = {
  children: ReactNode;
  className?: string;
  as?: StackAs;
};

export type StackProps = Props & Omit<HTMLAttributes<HTMLElement>, 'className'> & StackVariants;
