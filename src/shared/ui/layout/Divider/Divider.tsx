import { clsx } from 'clsx';

import { root } from './Divider.css';
import type { DividerProps } from './Divider.types';

export const Divider = ({ spacing, className }: DividerProps) => {
  return <div className={clsx(root({ spacing }), className)} />;
};
