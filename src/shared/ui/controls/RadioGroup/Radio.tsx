import { clsx } from 'clsx';
import type { FocusEventHandler } from 'react';

import { input, item, dot, labelText } from './RadioGroup.css';
import { useRadioGroupContext } from './RadioGroup';
import type { RadioProps } from './RadioGroup.types';

export const Radio = <T extends string | number>({
  value,
  disabled = false,
  className,
  children,
  ...rest
}: RadioProps<T>) => {
  const ctx = useRadioGroupContext();
  const checked = ctx.value === value;
  const isDisabled = disabled ?? ctx.disabled;

  const handleChange = () => {
    ctx.onChange(value as string | number);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = () => {
    ctx.onBlur?.();
  };

  return (
    <label className={clsx(item({ disabled: isDisabled }), className)}>
      <input
        {...rest}
        type="radio"
        name={ctx.name}
        value={String(value)}
        checked={checked}
        disabled={isDisabled}
        onChange={handleChange}
        onBlur={handleBlur}
        className={input}
        aria-invalid={ctx.invalid}
      />
      <span className={dot({ checked, invalid: ctx.invalid })} />
      {children != null && <span className={labelText}>{children}</span>}
    </label>
  );
};
