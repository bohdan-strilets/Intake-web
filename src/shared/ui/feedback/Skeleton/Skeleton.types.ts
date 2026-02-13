import type { RecipeVariants } from '@vanilla-extract/recipes';

import type { root } from './Skeleton.css';

export type SkeletonVariant = RecipeVariants<typeof root>;

export type SkeletonProps = SkeletonVariant & {
  width?: string | number;
  height?: string | number;
  className?: string;
};
