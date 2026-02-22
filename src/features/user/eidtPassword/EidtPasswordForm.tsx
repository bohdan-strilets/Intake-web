import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useTranslation } from '@shared/i18n';
import { Button } from '@shared/ui/controls/Button';
import { PasswordInput } from '@shared/ui/controls/PasswordInput';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Card } from '@shared/ui/layout/Card';

import { useSubmit } from './model';
import { createSchema } from './schema';
import type { FormValues } from './types';

export const EditPasswordForm = () => {
  const { t: tCommon } = useTranslation('common');
  const { t: tUser } = useTranslation('user');

  const schema = createSchema(tUser);

  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const { isValid, isDirty, errors } = methods.formState;
  const { onSubmit, isPending } = useSubmit(methods);

  return (
    <Form<FormValues> methods={methods} onSubmit={onSubmit}>
      <Card gap="lg" shadow="sm">
        <Field<FormValues>
          name="currentPassword"
          label={tUser('fields.currentPassword')}
          required
        >
          <PasswordInput />
        </Field>

        <Field<FormValues>
          name="newPassword"
          label={tUser('fields.newPassword')}
          required
        >
          <PasswordInput />
        </Field>

        <Field<FormValues>
          name="confirmNewPassword"
          label={tUser('fields.confirmPassword')}
          required
        >
          <PasswordInput />
        </Field>
      </Card>

      {errors.root && <FormError>{errors.root.message}</FormError>}

      <Button
        type="submit"
        disabled={!isValid || !isDirty}
        loading={isPending}
        fullWidth
      >
        {tCommon('actions.save')}
      </Button>
    </Form>
  );
};
