import type { ReactElement } from 'react';

type FieldControlProps = {
  id?: string;
  error?: boolean;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
};

export type FieldProps = {
  children: ReactElement<FieldControlProps>;

  label?: React.ReactNode;
  helperText?: string;
  error?: string;
  inputId: string;
  required?: boolean;
};
