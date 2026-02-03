import { clsx } from 'clsx';

import { root } from './Title/Title.css';
import type { TitleProps } from './Title.types';

export const Title = ({ children, level, size, tone, className }: TitleProps) => {
  const Component = `h${level}` as const;

  return <Component className={clsx(root({ size, tone }), className)}>{children}</Component>;
};
