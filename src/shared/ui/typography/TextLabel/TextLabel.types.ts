import type { LabelHTMLAttributes, ReactNode } from 'react';

export type TextLabelProps = Omit<LabelHTMLAttributes<HTMLLabelElement>, 'className'> & {
  children: ReactNode;
  required?: boolean;
};
