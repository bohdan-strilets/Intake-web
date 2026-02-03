import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { HTMLAttributes, ReactNode } from 'react';

import type { StructuralElement } from '@shared/types';

import type { root } from './Container.css';

export type ContainerVariants = RecipeVariants<typeof root>;

export type Props = {
  children: ReactNode;
  className?: string;
  as?: StructuralElement;
};

export type ContainerProps = Props &
  ContainerVariants &
  Omit<HTMLAttributes<HTMLElement>, 'className'>;
