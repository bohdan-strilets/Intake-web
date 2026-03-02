import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ApiError, errorKeyMap } from '@shared/api/error';
import { useTranslation } from '@shared/i18n';
import { Button } from '@shared/ui/controls/Button';
import { PasswordInput } from '@shared/ui/controls/PasswordInput';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { useResetPasswordMutation } from './useMutation';
import { createSchema } from './schema';
import type { FormValues } from './types';

type ResetPasswordFormProps = {
  token: string;
};

export const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
  const { t: tUser } = useTranslation('user');
  const { t: tAuth } = useTranslation('auth');
  const { t: tCommon } = useTranslation('common');

  const [success, setSuccess] = useState(false);

  const schema = createSchema(tUser);
  const methods = useForm<FormValues>({ resolver: zodResolver(schema) });

  const { isValid, errors } = methods.formState;
  const { mutateAsync, isPending } = useResetPasswordMutation();

  const onSubmit = async (values: FormValues) => {
    try {
      await mutateAsync({ token, newPassword: values.newPassword });
      setSuccess(true);
    } catch (error: unknown) {
      if (!(error instanceof ApiError)) {
        methods.setError('root', { message: tCommon(errorKeyMap.NETWORK_ERROR) });
        return;
      }
      if (error.code === 'INVALID_RESET_TOKEN') {
        methods.setError('root', { message: tAuth(errorKeyMap.INVALID_RESET_TOKEN) });
        return;
      }
      methods.setError('root', {
        message: tCommon(errorKeyMap.SERVER_ERROR),
      });
    }
  };

  if (success) {
    return (
      <Paragraph>{tAuth('passwordReset.success')}</Paragraph>
    );
  }

  return (
    <Form<FormValues> methods={methods} onSubmit={onSubmit}>
      <Field<FormValues>
        name="newPassword"
        label={tUser('fields.newPassword')}
        required
      >
        <PasswordInput />
      </Field>

      <Field<FormValues>
        name="confirmPassword"
        label={tUser('fields.confirmPassword')}
        required
      >
        <PasswordInput />
      </Field>

      {errors.root && <FormError>{errors.root.message}</FormError>}

      <Button type="submit" disabled={!isValid} loading={isPending} fullWidth>
        {tAuth('actions.resetPassword')}
      </Button>
    </Form>
  );
};
