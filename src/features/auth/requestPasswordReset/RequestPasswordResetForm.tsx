import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ApiError, errorKeyMap } from '@shared/api/error';
import { useTranslation } from '@shared/i18n';
import { Button } from '@shared/ui/controls/Button';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { useRequestPasswordResetMutation } from './useMutation';
import { createSchema } from './schema';
import type { FormValues } from './types';

export const RequestPasswordResetForm = () => {
  const { t: tUser } = useTranslation('user');
  const { t: tAuth } = useTranslation('auth');
  const { t: tCommon } = useTranslation('common');

  const [success, setSuccess] = useState(false);

  const schema = createSchema(tUser);
  const methods = useForm<FormValues>({ resolver: zodResolver(schema) });

  const { isValid, errors } = methods.formState;
  const { mutateAsync, isPending } = useRequestPasswordResetMutation();

  const onSubmit = async (values: FormValues) => {
    try {
      await mutateAsync(values);
      setSuccess(true);
      methods.reset();
    } catch (error: unknown) {
      if (!(error instanceof ApiError)) {
        methods.setError('root', { message: tCommon(errorKeyMap.NETWORK_ERROR) });
        return;
      }
      methods.setError('root', {
        message: tCommon(errorKeyMap.SERVER_ERROR),
      });
    }
  };

  if (success) {
    return (
      <Paragraph>{tAuth('passwordReset.requestSuccess')}</Paragraph>
    );
  }

  return (
    <Form<FormValues> methods={methods} onSubmit={onSubmit}>
      <Field<FormValues> name="email" label={tUser('fields.email')} required>
        <TextInput type="email" />
      </Field>

      {errors.root && <FormError>{errors.root.message}</FormError>}

      <Button type="submit" disabled={!isValid} loading={isPending} fullWidth>
        {tAuth('actions.sendResetLink')}
      </Button>
    </Form>
  );
};
