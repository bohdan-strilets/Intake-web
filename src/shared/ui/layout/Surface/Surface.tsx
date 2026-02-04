import { clsx } from 'clsx';

import { root } from './Surface.css';
import type { SurfaceProps } from './Surface.types';

export const Surface = ({
  children,
  tone,
  radius,
  shadow,
  border,
  className,
  as: Component = 'div',
  ...rest
}: SurfaceProps) => {
  return (
    <Component
      {...rest}
      className={clsx(root({ tone, radius, shadow, border }), className)}
    >
      {children}
    </Component>
  );
};
