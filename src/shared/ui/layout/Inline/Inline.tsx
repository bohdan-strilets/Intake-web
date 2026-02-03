import { clsx } from 'clsx';

import { root } from './Inline.css';
import type { InlineProps } from './Inline.types';

export const Inline = ({
  children,
  gap,
  align,
  justify,
  wrap,
  className,
  as: Component = 'div',
  ...rest
}: InlineProps) => {
  return (
    <Component {...rest} className={clsx(root({ gap, align, justify, wrap }), className)}>
      {children}
    </Component>
  );
};
