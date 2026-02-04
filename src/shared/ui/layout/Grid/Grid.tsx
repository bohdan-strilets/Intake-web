import { clsx } from 'clsx';

import { root } from './Grid.css';
import type { GridProps } from './Grid.types';

export const Grid = ({
  children,
  columns,
  gap,
  align,
  className,
  as: Component = 'div',
  ...rest
}: GridProps) => {
  return (
    <Component
      {...rest}
      className={clsx(root({ columns, gap, align }), className)}
    >
      {children}
    </Component>
  );
};
