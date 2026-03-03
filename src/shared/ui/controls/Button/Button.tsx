import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import { fadeTransition, tapScale } from '@shared/motion';
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
      <Inline gap="sm" align="center" style={{ position: 'relative' }}>
        <AnimatePresence mode="wait" initial={false}>
          {loading ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={fadeTransition}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <Spinner size="sm" color="primary" />
              <span>{children}</span>
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={fadeTransition}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              {iconLeft && (
                <Icon name={iconLeft} color={iconColor} size={iconSize} />
              )}
              <span>{children}</span>
              {iconRight && (
                <Icon name={iconRight} color={iconColor} size={iconSize} />
              )}
            </motion.span>
          )}
        </AnimatePresence>
      </Inline>
    </motion.button>
  );
};
