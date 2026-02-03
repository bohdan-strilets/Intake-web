import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { InputHTMLAttributes } from 'react';

import type { input } from './TextInput.css';

export type TextInputVariants = RecipeVariants<typeof input>;

export type TextInputProps = TextInputVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'className'> & {
    className?: string;
  };
