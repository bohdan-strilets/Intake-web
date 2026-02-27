import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import type { ChangeEventHandler, KeyboardEventHandler } from 'react';
import { forwardRef, useCallback } from 'react';

import { useRangeKeyboard } from '@shared/hooks/rangeKeyboard';
import { quickTransition, tapScale } from '@shared/motion';

import { input, root } from './Range.css';
import type { RangeProps } from './Range.types';

export const Range = forwardRef<HTMLInputElement, RangeProps>(
  (
    {
      className,
      min = 0,
      max = 100,
      step = 1,
      onChange,
      onValueChange,
      disabled,
      ...rest
    },
    ref,
  ) => {
    const handleNumericChange = useCallback(
      (numeric: number) => {
        if (!Number.isNaN(numeric)) {
          onValueChange?.(numeric);
        }
      },
      [onValueChange],
    );

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      onChange?.(event);
      handleNumericChange(Number(event.target.value));
    };

    const { handleKeyDown } = useRangeKeyboard({
      min: Number(min),
      max: Number(max),
      step: Number(step),
      disabled,
      onChange: handleNumericChange,
    });

    const handleKeyboard: KeyboardEventHandler<HTMLInputElement> = (event) => {
      handleKeyDown(event);
    };

    return (
      <motion.label
        className={clsx(root, className)}
        whileTap={tapScale.whileTap}
        transition={quickTransition}
        tabIndex={-1}
      >
        <input
          {...rest}
          ref={ref}
          type="range"
          min={Number(min)}
          max={Number(max)}
          step={Number(step)}
          disabled={disabled}
          onChange={handleChange}
          onKeyDown={handleKeyboard}
          className={input}
        />
      </motion.label>
    );
  },
);

Range.displayName = 'Range';
