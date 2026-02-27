import { clsx } from 'clsx';
import type {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
} from 'react';
import { useState } from 'react';

import { input, root, thumb, track } from './Switch.css';
import type { SwitchProps } from './Switch.types';

type AriaInvalid = InputHTMLAttributes<HTMLInputElement>['aria-invalid'];

export const Switch = ({
  checked,
  defaultChecked = false,
  disabled = false,
  className,
  id,
  invalid,
  onCheckedChange,
  ...rest
}: SwitchProps) => {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = useState(defaultChecked);

  const current = isControlled ? checked : internal;

  const ariaInvalid = rest['aria-invalid'] as AriaInvalid;

  const isInvalid =
    invalid ??
    (typeof ariaInvalid === 'boolean' ? ariaInvalid : ariaInvalid === 'true');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const next = event.target.checked;

    if (!isControlled) {
      setInternal(next);
    }

    if (rest.onChange) {
      rest.onChange(event);
    }

    onCheckedChange?.(next);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    if (rest.onBlur) {
      rest.onBlur(event);
    }
  };

  return (
    <label className={clsx(root({ disabled }), className)}>
      <input
        {...rest}
        id={id}
        type="checkbox"
        checked={current}
        disabled={disabled}
        onChange={handleChange}
        onBlur={handleBlur}
        className={input}
        aria-invalid={ariaInvalid}
      />

      <span className={track({ checked: current, invalid: isInvalid })}>
        <span className={thumb({ checked: current })} />
      </span>
    </label>
  );
};
