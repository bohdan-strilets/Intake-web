import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { HTMLAttributes, ReactNode } from 'react';

import type { StructuralElement } from '@shared/types';

import type { root } from './Stack.css';

export type StackVariants = RecipeVariants<typeof root>;

export type Props = {
  children: ReactNode;
  className?: string;
  as?: StructuralElement;
};

export type StackProps = Props & Omit<HTMLAttributes<HTMLElement>, 'className'> & StackVariants;
