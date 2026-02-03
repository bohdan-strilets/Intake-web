import { clsx } from 'clsx';

import { root } from './Container.css';
import type { ContainerProps } from './Container.types';

export const Container = ({
  children,
  paddingInline,
  className,
  as: Component = 'div',
  ...rest
}: ContainerProps) => {
  return (
    <Component {...rest} className={clsx(root({ paddingInline }), className)}>
      {children}
    </Component>
  );
};
