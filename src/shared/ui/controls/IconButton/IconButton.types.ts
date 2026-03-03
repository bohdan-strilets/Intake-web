import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { ButtonHTMLAttributes } from 'react';

import type { IconName, IconProps } from '../Icon/Icon.types';

import type { root } from './IconButton.css';

export type IconButtonVariants = RecipeVariants<typeof root>;

export type IconButtonProps = {
  icon: IconName;
  iconColor?: IconProps['color'];
  iconSize?: IconProps['size'];
  /** Пульс іконки (наприклад під час запису) */
  pulse?: boolean;
  className?: string;
} & IconButtonVariants &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;
