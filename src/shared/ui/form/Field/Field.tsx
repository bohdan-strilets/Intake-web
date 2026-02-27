import { cloneElement, isValidElement, useId } from 'react';
import type { HTMLAttributes } from 'react';
import {
  useFormContext,
  get,
  type FieldValues,
  Controller,
  type PathValue,
} from 'react-hook-form';

import { Stack } from '@shared/ui/layout/Stack';
import { ErrorText } from '@shared/ui/typography/ErrorText';
import { HelperText } from '@shared/ui/typography/HelperText';
import { TextLabel } from '@shared/ui/typography/TextLabel';

import type { FieldProps } from './Field.types';

export const Field = <T extends FieldValues>(props: FieldProps<T>) => {
  const { name, label, helperText, required } = props;

  const id = useId();

  const {
    register,
    control,
    setValue,
    formState: { errors },
  } = useFormContext<T>();

  if (!isValidElement<HTMLAttributes<HTMLElement>>(props.children)) return null;

  const error = get(errors, name)?.message as string | undefined;

  const helperId = helperText ? `${id}-help` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  const ariaDescribedBy =
    [helperId, errorId].filter(Boolean).join(' ') || undefined;

  const commonProps = {
    id,
    'aria-invalid': !!error,
    'aria-describedby': ariaDescribedBy,
  };

  return (
    <Stack gap="xs">
      {label && (
        <TextLabel htmlFor={id} required={required}>
          {label}
        </TextLabel>
      )}

      {helperText && <HelperText id={helperId}>{helperText}</HelperText>}

      {props.controlType !== 'controlled' ? (
        cloneElement(props.children, {
          ...commonProps,
          ...register(name, {
            setValueAs: props.valueAsNumber
              ? (value) =>
                  value === '' || value === null ? undefined : Number(value)
              : undefined,
          }),
        })
      ) : (
        <Controller
          name={name}
          control={control}
          render={({ field }) =>
            cloneElement(props.children, {
              ...commonProps,

              value: field.value,
              checked:
                typeof field.value === 'boolean' ? field.value : undefined,

              onChange: (value: PathValue<T, typeof name>) => {
                setValue(name, value, {
                  shouldDirty: true,
                  shouldTouch: true,
                  shouldValidate: true,
                });
              },

              onCheckedChange:
                typeof field.value === 'boolean'
                  ? (checked: boolean) => {
                      setValue(name, checked as PathValue<T, typeof name>, {
                        shouldDirty: true,
                        shouldTouch: true,
                        shouldValidate: true,
                      });
                    }
                  : undefined,

              onBlur: () => {
                field.onBlur();
              },
            })
          }
        />
      )}

      {error && (
        <ErrorText id={errorId} aria-live="polite">
          {error}
        </ErrorText>
      )}
    </Stack>
  );
};
