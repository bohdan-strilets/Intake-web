import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { HTMLMotionProps } from 'framer-motion';

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
  Omit<HTMLMotionProps<'button'>, 'className' | 'children'>;
