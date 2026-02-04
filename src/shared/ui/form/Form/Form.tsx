import { FormProvider, type FieldValues } from 'react-hook-form';

import { Stack } from '@shared/ui/layout/Stack';

import type { FormProps } from './Form.types';

export const Form = <T extends FieldValues>({
  children,
  methods,
  onSubmit,
  noValidate = true,
}: FormProps<T>) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate={noValidate}>
        <Stack gap="xl">{children}</Stack>
      </form>
    </FormProvider>
  );
};
