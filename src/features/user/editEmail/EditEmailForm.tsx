import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { UserFieldLabels } from '@entities/user';

import { Button } from '@shared/ui/controls/Button';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Card } from '@shared/ui/layout/Card';

import { useSubmit } from './model';
import { schema } from './schema';
import type { FormProps, FormValues } from './types';

export const EditEmailForm = ({ initialState }: FormProps) => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: initialState,
  });

  const { isValid, isDirty, errors } = methods.formState;
  const { onSubmit, isPending } = useSubmit(methods);

  return (
    <Form<FormValues> methods={methods} onSubmit={onSubmit}>
      <Card gap="lg" shadow="sm">
        <Field<FormValues> name="email" label={UserFieldLabels.email} required>
          <TextInput type="email" />
        </Field>
      </Card>

      {errors.root && <FormError>{errors.root.message}</FormError>}

      <Button
        type="submit"
        disabled={!isValid || !isDirty}
        loading={isPending}
        fullWidth
      >
        Save
      </Button>
    </Form>
  );
};
