import type { HTMLAttributes, ReactNode } from 'react';

export type HelperTextProps = Omit<
  HTMLAttributes<HTMLParagraphElement>,
  'className'
> & {
  children: ReactNode;
};
