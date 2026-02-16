import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  UserFieldHelpers,
  UserFieldLabels,
  activityLevelOptions,
  goalOptions,
  sexOptions,
} from '@entities/user';

import { Button } from '@shared/ui/controls/Button';
import { PasswordInput } from '@shared/ui/controls/PasswordInput';
import { Select } from '@shared/ui/controls/Select';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Card } from '@shared/ui/layout/Card';
import { Title } from '@shared/ui/typography/Title';

import { useSubmit } from './model';
import { schema } from './schema';
import type { FormValues } from './types';

export const RegisterForm = () => {
  const resolver = zodResolver(schema);
  const methods = useForm<FormValues>({ resolver, mode: 'onChange' });

  const { isValid, errors } = methods.formState;
  const { onSubmit, isPending } = useSubmit(methods);

  return (
    <Form<FormValues> methods={methods} onSubmit={onSubmit}>
      <Card gap="lg" shadow="sm">
        <Title level={2} size="md">
          Account
        </Title>

        <Field<FormValues> name="name" label={UserFieldLabels.name} required>
          <TextInput />
        </Field>

        <Field<FormValues> name="email" label={UserFieldLabels.email} required>
          <TextInput type="email" />
        </Field>

        <Field<FormValues>
          name="password"
          label={UserFieldLabels.password}
          helperText={UserFieldHelpers.password}
          required
        >
          <PasswordInput />
        </Field>

        <Field<FormValues>
          name="confirmPassword"
          label={UserFieldLabels.confirmNewPassword}
          required
        >
          <PasswordInput />
        </Field>
      </Card>

      <Card gap="lg" shadow="sm">
        <Title level={2} size="md">
          Body parameters
        </Title>

        <Field<FormValues>
          name="sex"
          label={UserFieldLabels.sex}
          controlType="controlled"
          required
        >
          <Select options={sexOptions} />
        </Field>

        <Field<FormValues>
          name="age"
          label={UserFieldLabels.age}
          helperText={UserFieldHelpers.age}
          required
          valueAsNumber
        >
          <TextInput type="number" step={1} inputMode="numeric" />
        </Field>

        <Field<FormValues>
          name="height"
          label={UserFieldLabels.height}
          helperText={UserFieldHelpers.height}
          required
          valueAsNumber
        >
          <TextInput type="number" />
        </Field>

        <Field<FormValues>
          name="weight"
          label={UserFieldLabels.weight}
          helperText={UserFieldHelpers.weight}
          required
          valueAsNumber
        >
          <TextInput type="number" />
        </Field>
      </Card>

      <Card gap="lg" shadow="sm">
        <Title level={2} size="md">
          Goals
        </Title>

        <Field<FormValues>
          name="goal"
          label={UserFieldLabels.goal}
          controlType="controlled"
          required
        >
          <Select options={goalOptions} />
        </Field>

        <Field<FormValues>
          name="activityLevel"
          label={UserFieldLabels.activityLevel}
          helperText={UserFieldHelpers.activityLevel}
          controlType="controlled"
          required
        >
          <Select options={activityLevelOptions} />
        </Field>
      </Card>

      {errors.root && <FormError>{errors.root.message}</FormError>}

      <Button type="submit" disabled={!isValid} loading={isPending} fullWidth>
        Create account
      </Button>
    </Form>
  );
};
