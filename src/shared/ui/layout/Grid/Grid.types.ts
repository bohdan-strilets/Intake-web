import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { HTMLAttributes, ReactNode } from 'react';

import type { StructuralElement } from '@shared/types';

import type { root } from './Grid.css';

export type GridVariants = RecipeVariants<typeof root>;

export type Props = {
  children: ReactNode;
  className?: string;
  as?: StructuralElement;
};

export type GridProps = Props & GridVariants & Omit<HTMLAttributes<HTMLElement>, 'className'>;
