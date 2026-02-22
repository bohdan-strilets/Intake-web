import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  createActivityLevelOptions,
  createGoalOptions,
  createSexOptions,
  PasswordConstraints,
} from '@entities/user';

import { useTranslation } from '@shared/i18n';
import { Button } from '@shared/ui/controls/Button';
import { DatePicker } from '@shared/ui/controls/DatePicker';
import { PasswordInput } from '@shared/ui/controls/PasswordInput';
import { Select } from '@shared/ui/controls/Select';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Card } from '@shared/ui/layout/Card';
import { Title } from '@shared/ui/typography/Title';

import { useSubmit } from './model';
import { createSchema } from './schema';
import type { FormValues } from './types';

export const RegisterForm = () => {
  const { t: tUser } = useTranslation('user');
  const { t: tProfile } = useTranslation('profile');
  const { t: tAuth } = useTranslation('auth');

  const schema = createSchema(tUser);
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const { isValid, errors } = methods.formState;
  const { onSubmit, isPending } = useSubmit(methods);

  return (
    <Form<FormValues> methods={methods} onSubmit={onSubmit}>
      <Card gap="lg" shadow="sm">
        <Title level={2} size="md">
          {tProfile('sections.account')}
        </Title>

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
      </Card>

      <Card gap="lg" shadow="sm">
        <Title level={2} size="md">
          {tProfile('sections.body')}
        </Title>

        <Field<FormValues>
          name="sex"
          label={tUser('fields.sex')}
          controlType="controlled"
          required
        >
          <Select options={createSexOptions(tUser)} />
        </Field>

        <Field<FormValues>
          name="dateOfBirth"
          label={tUser('fields.dateOfBirth')}
          required
          controlType="controlled"
        >
          <DatePicker />
        </Field>

        <Field<FormValues>
          name="height"
          label={tUser('fields.height')}
          helperText={tUser('helpers.height')}
          required
          valueAsNumber
        >
          <TextInput type="number" />
        </Field>

        <Field<FormValues>
          name="weight"
          label={tUser('fields.weight')}
          helperText={tUser('helpers.weight')}
          required
          valueAsNumber
        >
          <TextInput type="number" />
        </Field>
      </Card>

      <Card gap="lg" shadow="sm">
        <Title level={2} size="md">
          {tProfile('sections.goals')}
        </Title>

        <Field<FormValues>
          name="goal"
          label={tUser('fields.goal')}
          controlType="controlled"
          required
        >
          <Select options={createGoalOptions(tUser)} />
        </Field>

        <Field<FormValues>
          name="activityLevel"
          label={tUser('fields.activityLevel')}
          helperText={tUser('helpers.activityLevel')}
          controlType="controlled"
          required
        >
          <Select options={createActivityLevelOptions(tUser)} />
        </Field>
      </Card>

      {errors.root && <FormError>{errors.root.message}</FormError>}

      <Button type="submit" disabled={!isValid} loading={isPending} fullWidth>
        {tAuth('actions.createAccount')}
      </Button>
    </Form>
  );
};
