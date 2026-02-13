import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { IconName, IconProps } from '../Icon/Icon.types';

import type { root } from './Button.css';

export type ButtonVariants = RecipeVariants<typeof root>;

export type Props = {
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
  iconColor?: IconProps['color'];
  iconSize?: IconProps['size'];
  className?: string;
};

export type ButtonProps = Props &
  ButtonVariants &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;
