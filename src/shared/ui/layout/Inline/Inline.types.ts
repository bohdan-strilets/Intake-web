import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { HTMLAttributes, ReactNode } from 'react';

import type { StructuralElement } from '@shared/types';

import type { root } from './Inline.css';

export type InlineVariants = RecipeVariants<typeof root>;

export type Props = {
  children: ReactNode;
  className?: string;
  as?: StructuralElement;
};

export type InlineProps = Props & InlineVariants & Omit<HTMLAttributes<HTMLElement>, 'className'>;
