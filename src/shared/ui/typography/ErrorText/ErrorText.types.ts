import type { HTMLAttributes, ReactNode } from 'react';

export type ErrorTextProps = Omit<HTMLAttributes<HTMLParagraphElement>, 'className'> & {
  children: ReactNode;
};
