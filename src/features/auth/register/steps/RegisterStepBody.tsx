import { useTranslation } from '@shared/i18n';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Stack } from '@shared/ui/layout/Stack';
import { HelperText } from '@shared/ui/typography/HelperText';

import type { FormValues } from '../types';

export const RegisterStepBody = () => {
  const { t: tUser } = useTranslation('user');
  const { t: tAuth } = useTranslation('auth');

  return (
    <Stack gap="xl">
      <HelperText>{tAuth('register.steps.body.description')}</HelperText>

      <Field<FormValues>
        name="height"
        label={tUser('fields.height')}
        helperText={tUser('helpers.height')}
        required
        valueAsNumber
      >
        <TextInput type="number" inputMode="decimal" />
      </Field>

      <Field<FormValues>
        name="weight"
        label={tUser('fields.weight')}
        helperText={tUser('helpers.weight')}
        required
        valueAsNumber
      >
        <TextInput type="number" inputMode="decimal" />
      </Field>
    </Stack>
  );
};
