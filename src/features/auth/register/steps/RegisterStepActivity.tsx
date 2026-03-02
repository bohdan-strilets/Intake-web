import { createActivityLevelOptions } from '@entities/user';

import { useTranslation } from '@shared/i18n';
import { Select } from '@shared/ui/controls/Select';
import { Field } from '@shared/ui/form/Field';
import { Stack } from '@shared/ui/layout/Stack';
import { HelperText } from '@shared/ui/typography/HelperText';

import type { FormValues } from '../types';

const ACTIVITY_HELPER_KEYS = [
  'sedentary',
  'light',
  'moderate',
  'high',
  'veryHigh',
] as const;

export const RegisterStepActivity = () => {
  const { t: tUser } = useTranslation('user');
  const { t: tAuth } = useTranslation('auth');

  const examples = ACTIVITY_HELPER_KEYS.map((key) =>
    tAuth(`register.steps.activity.helpers.${key}`),
  ).join(' · ');

  return (
    <Stack gap="xl">
      <HelperText>{tAuth('register.steps.activity.description')}</HelperText>

      <Field<FormValues>
        name="activityLevel"
        label={tUser('fields.activityLevel')}
        helperText={tUser('helpers.activityLevel')}
        controlType="controlled"
        required
      >
        <Select options={createActivityLevelOptions(tUser)} />
      </Field>

      <HelperText>{examples}</HelperText>
    </Stack>
  );
};
