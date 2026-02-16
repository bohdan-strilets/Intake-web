import { forwardRef, useState } from 'react';

import { Icon } from '../Icon';
import { TextInput } from '../TextInput';

import { toggleButton, wrapper } from './PasswordInput.css';
import type { PasswordInputProps } from './PasswordInput.types';

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [visible, setVisible] = useState(false);
    const toggle = () => setVisible((state) => !state);

    return (
      <div className={wrapper}>
        <TextInput
          ref={ref}
          type={visible ? 'text' : 'password'}
          className={className}
          {...props}
        />

        <button type="button" className={toggleButton} onClick={toggle}>
          <Icon name={visible ? 'eyeOff' : 'eye'} color="muted" />
        </button>
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
