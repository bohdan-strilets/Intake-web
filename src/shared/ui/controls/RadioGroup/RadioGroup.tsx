import { clsx } from 'clsx';
import {
  createContext,
  useId,
  useCallback,
  useContext,
  type FocusEventHandler,
} from 'react';

import { group } from './RadioGroup.css';
import type { RadioGroupContextValue, RadioGroupProps } from './RadioGroup.types';

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export const RadioGroup = <T extends string | number>({
  value,
  onChange,
  onBlur,
  name: nameProp,
  id,
  'aria-invalid': ariaInvalid,
  'aria-describedby': ariaDescribedBy,
  disabled,
  direction = 'column',
  className,
  children,
}: RadioGroupProps<T>) => {
  const fallbackName = useId();
  const name = nameProp ?? fallbackName;

  const invalid =
    ariaInvalid === true ||
    ariaInvalid === 'true' ||
    (typeof ariaInvalid === 'boolean' && ariaInvalid);

  const handleBlur: FocusEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        onBlur?.();
      }
    },
    [onBlur],
  );

  const contextValue: RadioGroupContextValue = {
    name,
    value,
    onChange: (v) => onChange?.(v as T),
    onBlur,
    invalid,
    disabled,
  };

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div
        role="radiogroup"
        id={id}
        aria-invalid={invalid}
        aria-describedby={ariaDescribedBy}
        onBlur={handleBlur}
        className={clsx(group({ direction }), className)}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

export function useRadioGroupContext() {
  const ctx = useContext(RadioGroupContext);
  if (!ctx) {
    throw new Error('Radio must be used within RadioGroup');
  }
  return ctx;
}
