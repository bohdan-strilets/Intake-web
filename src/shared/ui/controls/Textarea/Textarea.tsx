import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { textarea } from './Textarea.css';
import type { TextareaProps } from './Textarea.types';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ size, error, className, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx(textarea({ size, error }), className)}
        {...rest}
      />
    );
  },
);

Textarea.displayName = 'Textarea';
