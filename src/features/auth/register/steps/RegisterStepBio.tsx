import { SEX } from '@entities/user';

import { useTranslation } from '@shared/i18n';
import { DatePicker } from '@shared/ui/controls/DatePicker';
import { Radio, RadioGroup } from '@shared/ui/controls/RadioGroup';
import { Field } from '@shared/ui/form/Field';
import { Stack } from '@shared/ui/layout/Stack';
import { HelperText } from '@shared/ui/typography/HelperText';

import type { FormValues } from '../types';

export const RegisterStepBio = () => {
  const { t: tUser } = useTranslation('user');
  const { t: tAuth } = useTranslation('auth');

  return (
    <Stack gap="xl">
      <HelperText>{tAuth('register.steps.bio.description')}</HelperText>

      <Field<FormValues>
        name="sex"
        label={tUser('fields.sex')}
        controlType="controlled"
        required
      >
        <RadioGroup direction="row">
          <Radio value={SEX.Male}>{tUser('sex.male')}</Radio>
          <Radio value={SEX.Female}>{tUser('sex.female')}</Radio>
        </RadioGroup>
      </Field>

      <Field<FormValues>
        name="dateOfBirth"
        label={tUser('fields.dateOfBirth')}
        required
        controlType="controlled"
      >
        <DatePicker />
      </Field>
    </Stack>
  );
};
