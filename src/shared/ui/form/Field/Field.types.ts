import type { ReactElement, ReactNode } from 'react';
import type { FieldValues, Path, PathValue } from 'react-hook-form';
import type { ChangeHandler } from 'react-hook-form';

export type InputUIProps = {
  name?: string;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  ref?: React.Ref<unknown>;

  id?: string;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
};

export type ControlledUIProps<TValue> = {
  value?: TValue;
  onChange?: (value: TValue) => void | Promise<void>;
  onBlur?: () => void;

  id?: string;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
};

type BaseFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label?: ReactNode;
  /** Custom label row (e.g. Inline with label + tooltip). Receives input id for htmlFor. When set, label is ignored. */
  labelRow?: (id: string) => ReactNode;
  helperText?: string;
  required?: boolean;
  /** Rendered in the same row as the input (e.g. tooltip button) */
  suffix?: ReactNode;
};

type FieldInputProps<T extends FieldValues> = {
  controlType?: 'input';
  valueAsNumber?: boolean;
  children: ReactElement<InputUIProps>;
} & BaseFieldProps<T>;

type FieldControlledProps<T extends FieldValues> = {
  controlType: 'controlled';
  children: ReactElement<ControlledUIProps<PathValue<T, Path<T>>>>;
} & BaseFieldProps<T>;

export type FieldProps<T extends FieldValues> =
  | FieldInputProps<T>
  | FieldControlledProps<T>;
