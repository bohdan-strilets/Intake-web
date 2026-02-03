import { clsx } from 'clsx';

import { Inline } from '@shared/ui/layout/Inline';

import { root } from './Button.css';
import type { ButtonProps } from './Button.types';

export const Button = ({
  children,
  variant,
  size,
  fullWidth,
  className,
  type = 'button',
  loading = false,
  disabled = false,
  iconLeft,
  iconRight,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      type={type}
      className={clsx(root({ variant, size, fullWidth }), className)}
      disabled={loading || disabled}
      aria-busy={loading || undefined}
    >
      <Inline gap="sm" align="center">
        {iconLeft}
        <span>{children}</span>
        {iconRight}

        {loading && (
          <span aria-hidden className="spinner">
            ...
          </span>
        )}
      </Inline>
    </button>
  );
};
