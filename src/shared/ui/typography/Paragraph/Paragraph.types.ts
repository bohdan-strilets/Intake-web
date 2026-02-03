import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { HTMLAttributes, ReactNode } from 'react';

import type { root } from './Paragraph.css';

export type ParagraphVariants = RecipeVariants<typeof root>;

export type ParagraphProps = ParagraphVariants &
  Omit<HTMLAttributes<HTMLParagraphElement>, 'className'> & {
    children: ReactNode;
    className?: string;
  };
