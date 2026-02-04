import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { TextareaHTMLAttributes } from 'react';

import type { textarea } from './Textarea.css';

export type TextareaVariants = RecipeVariants<typeof textarea>;

export type TextareaProps = TextareaVariants &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> & {
    className?: string;
  };
