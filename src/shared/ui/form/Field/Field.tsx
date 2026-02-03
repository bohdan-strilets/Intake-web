import { cloneElement, isValidElement } from 'react';

import { Stack } from '@shared/ui/layout/Stack';
import { ErrorText } from '@shared/ui/typography/ErrorText';
import { HelperText } from '@shared/ui/typography/HelperText';
import { TextLabel } from '@shared/ui/typography/TextLabel';

import type { FieldProps } from './Field.types';

export const Field = ({ children, label, helperText, error, inputId, required }: FieldProps) => {
  if (!isValidElement(children)) return null;

  const labelId = `${inputId}-label`;
  const helperId = helperText ? `${inputId}-help` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;

  const ariaDescribedBy = [helperId, errorId].filter(Boolean).join(' ') || undefined;

  const control = cloneElement(children, {
    id: inputId,
    error: Boolean(error),
    'aria-invalid': Boolean(error) || undefined,
    'aria-describedby': ariaDescribedBy,
  });

  return (
    <Stack gap="xs">
      {label && (
        <TextLabel htmlFor={inputId} id={labelId} required={required}>
          {label}
        </TextLabel>
      )}

      {control}

      {error ? (
        <ErrorText id={errorId} aria-live="polite">
          {error}
        </ErrorText>
      ) : (
        helperText && <HelperText id={helperId}>{helperText}</HelperText>
      )}
    </Stack>
  );
};
