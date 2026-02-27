import type { InputHTMLAttributes } from 'react';

export type RangeProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  className?: string;
  onValueChange?: (value: number) => void;
};

