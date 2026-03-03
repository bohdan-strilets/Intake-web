import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { motionEase, motionDurations, tapScale } from '@shared/motion';

import { Icon } from '../Icon';

import { iconPulse, root } from './IconButton.css';
import type { IconButtonProps } from './IconButton.types';

const iconTransition = { duration: motionDurations.fast, ease: motionEase.smooth };

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant,
      size,
      iconColor,
      iconSize,
      pulse = false,
      className,
      disabled = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <motion.button
        ref={ref}
        type="button"
        className={clsx(root({ variant, size }), className)}
        disabled={disabled}
        {...(!disabled ? tapScale : {})}
        {...rest}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={icon}
            initial={{ opacity: 0.7, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={iconTransition}
            className={pulse ? iconPulse : undefined}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Icon name={icon} color={iconColor} size={iconSize} />
          </motion.span>
        </AnimatePresence>
      </motion.button>
    );
  },
);

IconButton.displayName = 'IconButton';
