import { PasswordConstraints } from '@entities/user';

import { useTranslation } from '@shared/i18n';
import { PasswordInput } from '@shared/ui/controls/PasswordInput';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Stack } from '@shared/ui/layout/Stack';
import { HelperText } from '@shared/ui/typography/HelperText';

import type { FormValues } from '../types';

export const RegisterStepAccount = () => {
  const { t: tUser } = useTranslation('user');
  const { t: tAuth } = useTranslation('auth');

  return (
    <Stack gap="xl">
      <HelperText>{tAuth('register.steps.account.description')}</HelperText>

      <Field<FormValues> name="name" label={tUser('fields.name')} required>
        <TextInput />
      </Field>

      <Field<FormValues> name="email" label={tUser('fields.email')} required>
        <TextInput type="email" />
      </Field>

      <Field<FormValues>
        name="password"
        label={tUser('fields.password')}
        helperText={tUser('helpers.password', {
          min: PasswordConstraints.password.min,
        })}
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
    </Stack>
  );
};
