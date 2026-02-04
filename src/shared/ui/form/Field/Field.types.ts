import type { ReactElement } from 'react';
import type { ChangeHandler, FieldValues, Path } from 'react-hook-form';

type RHFControlProps = {
  name?: string;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  ref?: React.Ref<unknown>;

  id?: string;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
};

type FieldControlElement = ReactElement<RHFControlProps>;

export type FieldProps<T extends FieldValues = FieldValues> = {
  name: Path<T>;
  label?: string;
  helperText?: string;
  required?: boolean;
  children: FieldControlElement;
};
