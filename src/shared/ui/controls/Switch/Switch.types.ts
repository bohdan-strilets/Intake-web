import type { InputHTMLAttributes } from 'react';

type NativeInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'checked' | 'defaultChecked'
>;

export type SwitchProps = NativeInputProps & {
  checked?: boolean;
  defaultChecked?: boolean;
  invalid?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};
