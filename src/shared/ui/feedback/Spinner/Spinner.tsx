import { clsx } from 'clsx';

import { root } from './Spinner.css';
import type { SpinnerProps } from './Spinner.types';

export const Spinner = ({ size, color, className, ...rest }: SpinnerProps) => {
  return (
    <span
      {...rest}
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={clsx(root({ size, color }), className)}
    />
  );
};
