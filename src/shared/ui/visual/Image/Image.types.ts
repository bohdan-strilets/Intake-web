import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { ImgHTMLAttributes } from 'react';

import type { image, wrapper } from './Image.css';

export type WrapperVariants = RecipeVariants<typeof wrapper>;
export type ImageInnerVariants = RecipeVariants<typeof image>;

export type ImageProps = WrapperVariants &
  ImageInnerVariants &
  ImgHTMLAttributes<HTMLImageElement>;
