import type { RecipeVariants } from '@vanilla-extract/recipes';

import type { IconProps } from '../Icon/Icon.types';

import type { root } from './IconBadge.css';

export type IconBadgeVariants = RecipeVariants<typeof root>;

export type IconBadgeProps = IconBadgeVariants & {
  name: IconProps['name'];
  color?: IconProps['color'];
  className?: string;
};
