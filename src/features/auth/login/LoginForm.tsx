import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { UserFieldLabels } from '@entities/user/meta';

import { Button } from '@shared/ui/controls/Button';
import { PasswordInput } from '@shared/ui/controls/PasswordInput';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Divider } from '@shared/ui/layout/Divider';
import { Stack } from '@shared/ui/layout/Stack';

import { useRestoreAccountMutation } from '../restoreAccount';

import { useSubmit } from './model';
import { schema } from './schema';
import type { FormValues } from './types';

export const LoginForm = () => {
  const methods = useForm<FormValues>({ resolver: zodResolver(schema) });

  const { isValid, errors } = methods.formState;
  const { onSubmit, isPending, canRestore } = useSubmit(methods);

  const restoreAccount = useRestoreAccountMutation();

  const handleRestore = () => {
    const values = methods.getValues();
    restoreAccount.mutate(values);
  };

  return (
    <Form<FormValues> methods={methods} onSubmit={onSubmit}>
      <Field<FormValues> name="email" label={UserFieldLabels.email} required>
        <TextInput type="email" />
      </Field>

      <Field<FormValues>
        name="password"
        label={UserFieldLabels.password}
        required
      >
        <PasswordInput />
      </Field>

      {errors.root && <FormError>{errors.root.message}</FormError>}

      <Stack gap="sm">
        {canRestore && (
          <>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              fullWidth
              onClick={handleRestore}
              loading={restoreAccount.isPending}
            >
              Restore account
            </Button>
            <Divider />
          </>
        )}

        <Button type="submit" disabled={!isValid} loading={isPending} fullWidth>
          Log In
        </Button>
      </Stack>
    </Form>
  );
};
