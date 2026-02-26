import { clsx } from 'clsx';
import { motion } from 'framer-motion';

import { tapScale } from '@shared/motion';
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
  iconSize,
  ...rest
}: ButtonProps) => {
  const isDisabled = loading || disabled;

  return (
    <motion.button
      {...(!isDisabled ? tapScale : {})}
      type={type}
      className={clsx(root({ variant, size, fullWidth }), className)}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...rest}
    >
      <Inline gap="sm" align="center">
        {iconLeft && <Icon name={iconLeft} color={iconColor} size={iconSize} />}

        <span>{children}</span>

        {iconRight && (
          <Icon name={iconRight} color={iconColor} size={iconSize} />
        )}

        {loading && <Spinner size="sm" color="primary" />}
      </Inline>
    </motion.button>
  );
};
