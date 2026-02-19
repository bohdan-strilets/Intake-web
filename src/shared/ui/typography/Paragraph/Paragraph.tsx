import { clsx } from 'clsx';

import { root } from './Paragraph.css';
import type { ParagraphProps } from './Paragraph.types';

export const Paragraph = ({
  children,
  size,
  tone,
  align,
  weight,
  uppercase,
  className,
  ...rest
}: ParagraphProps) => {
  return (
    <p
      {...rest}
      className={clsx(
        root({ size, tone, align, weight, uppercase }),
        className,
      )}
    >
      {children}
    </p>
  );
};
