import { clsx } from 'clsx';

import { root } from './Section.css';
import type { SectionProps } from './Section.types';

export const Section = ({
  children,
  tone,
  padding,
  className,
  ...rest
}: SectionProps) => {
  return (
    <section {...rest} className={clsx(root({ tone, padding }), className)}>
      {children}
    </section>
  );
};
