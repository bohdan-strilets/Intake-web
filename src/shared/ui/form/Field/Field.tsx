import { cloneElement, isValidElement, useId } from 'react';
import type { HTMLAttributes } from 'react';
import { useFormContext, get, type FieldValues } from 'react-hook-form';

import { Stack } from '@shared/ui/layout/Stack';
import { ErrorText } from '@shared/ui/typography/ErrorText';
import { HelperText } from '@shared/ui/typography/HelperText';
import { TextLabel } from '@shared/ui/typography/TextLabel';

import type { FieldProps } from './Field.types';

export const Field = <T extends FieldValues>({
  name,
  children,
  label,
  helperText,
  required,
}: FieldProps<T>) => {
  const id = useId();

  const {
    register,
    formState: { errors },
  } = useFormContext();

  if (!isValidElement<HTMLAttributes<HTMLElement>>(children)) return null;

  const error = get(errors, name)?.message as string | undefined;

  const helperId = helperText ? `${id}-help` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  const ariaDescribedBy =
    [helperId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <Stack gap="xs">
      {label && (
        <TextLabel htmlFor={id} required={required}>
          {label}
        </TextLabel>
      )}

      {helperText && <HelperText id={helperId}>{helperText}</HelperText>}

      {cloneElement(children, {
        id,
        ...register(name),
        'aria-invalid': error ? true : undefined,
        'aria-describedby': ariaDescribedBy,
      })}

      {error && (
        <ErrorText id={errorId} aria-live="polite">
          {error}
        </ErrorText>
      )}
    </Stack>
  );
};
