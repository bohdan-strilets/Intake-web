import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { HTMLAttributes, ReactNode } from 'react';

import type { StructuralElement } from '@shared/types';

import type { root } from './Surface.css';

export type SurfaceVariants = RecipeVariants<typeof root>;

export type Props = {
  children: ReactNode;
  className?: string;
  as?: StructuralElement;
};

export type SurfaceProps = Props &
  SurfaceVariants &
  Omit<HTMLAttributes<HTMLElement>, 'className'>;
