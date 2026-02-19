import { clsx } from 'clsx';

import { root } from './Title.css';
import type { TitleProps } from './Title.types';

export const Title = ({
  children,
  level,
  size,
  align,
  tone,
  className,
}: TitleProps) => {
  const Component = `h${level}` as const;

  return (
    <Component className={clsx(root({ size, align, tone }), className)}>
      {children}
    </Component>
  );
};
