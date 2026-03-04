import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { HTMLAttributes, ReactNode } from 'react';

import type { root } from './Section.css';

export type SectionVariants = RecipeVariants<typeof root>;

export type SectionProps = {
  children: ReactNode;
  className?: string;
} & SectionVariants &
  Omit<HTMLAttributes<HTMLElement>, 'className'>;
