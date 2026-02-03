import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { HTMLAttributes } from 'react';

import type { root } from './Icon.css';
import type { icons } from './icons';

export type IconVariant = RecipeVariants<typeof root>;
export type IconName = keyof typeof icons;

export type Props = {
  icon: IconName;
  decorative?: boolean;
};

export type IconProps = Props & IconVariant & Omit<HTMLAttributes<SVGElement>, 'color'>;
