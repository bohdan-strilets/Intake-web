import { clsx } from 'clsx';

import { Spinner } from '@shared/ui/feedback/Spinner';
import { Inline } from '@shared/ui/layout/Inline';

import { Icon } from '../Icon';

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
  iconColor,
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
        {iconLeft && <Icon name={iconLeft} color={iconColor} />}
        <span>{children}</span>
        {iconRight && <Icon name={iconRight} />}

        {loading && <Spinner size="sm" color="primary" />}
      </Inline>
    </button>
  );
};
