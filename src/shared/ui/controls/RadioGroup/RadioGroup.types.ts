import type { InputHTMLAttributes } from 'react';

export type RadioGroupContextValue = {
  name: string;
  value: string | number | undefined;
  onChange: (value: string | number) => void;
  onBlur?: () => void;
  invalid?: boolean;
  disabled?: boolean;
};

export type RadioGroupDirection = 'column' | 'row';

export type RadioGroupProps<T = string> = {
  value?: T;
  onChange?: (value: T) => void;
  onBlur?: () => void;
  name?: string;
  id?: string;
  'aria-invalid'?: boolean | 'true' | 'false';
  'aria-describedby'?: string;
  disabled?: boolean;
  /** Layout: column (default) or row (options in one line) */
  direction?: RadioGroupDirection;
  className?: string;
  children: React.ReactNode;
};

export type RadioProps<T = string> = {
  value: T;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'checked' | 'onChange' | 'name'
>;
