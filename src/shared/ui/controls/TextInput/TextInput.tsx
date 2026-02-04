import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { input } from './TextInput.css';
import type { TextInputProps } from './TextInput.types';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ size, error, className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(input({ size, error }), className)}
        {...rest}
      />
    );
  },
);

TextInput.displayName = 'TextInput';
