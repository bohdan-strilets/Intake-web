import { clsx } from 'clsx';

import { root } from './Stack.css';
import type { StackProps } from './Stack.types';

export const Stack = ({
  children,
  gap,
  align,
  justify,
  className,
  as: Component = 'div',
  ...rest
}: StackProps) => {
  return (
    <Component
      {...rest}
      className={clsx(root({ gap, align, justify }), className)}
    >
      {children}
    </Component>
  );
};
