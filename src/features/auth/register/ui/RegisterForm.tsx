import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { UserFieldHelpers, UserFieldLabels } from '@entities/user/meta';
import {
  activityLevelOptions,
  goalOptions,
  sexOptions,
} from '@entities/user/options';

import { Button } from '@shared/ui/controls/Button';
import { Select } from '@shared/ui/controls/Select';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Card } from '@shared/ui/layout/Card';
import { Title } from '@shared/ui/typography/Title';

import { useRegisterSubmit } from '../model';
import { registerSchema } from '../schemas';
import type { RegisterFormValues } from '../types';

export const RegisterForm = () => {
  const resolver = zodResolver(registerSchema);
  const methods = useForm<RegisterFormValues>({ resolver, mode: 'onChange' });

  const { isValid, errors } = methods.formState;
  const { onSubmit, isPending } = useRegisterSubmit(methods);

  return (
    <Form<RegisterFormValues> methods={methods} onSubmit={onSubmit}>
      <Card gap="lg" shadow="sm">
        <Title level={2} size="md">
          Account
        </Title>

        <Field<RegisterFormValues>
          name="name"
          label={UserFieldLabels.name}
          required
        >
          <TextInput />
        </Field>

        <Field<RegisterFormValues>
          name="email"
          label={UserFieldLabels.email}
          required
        >
          <TextInput type="email" />
        </Field>

        <Field<RegisterFormValues>
          name="password"
          label={UserFieldLabels.password}
          helperText={UserFieldHelpers.password}
          required
        >
          <TextInput type="password" />
        </Field>
      </Card>

      <Card gap="lg" shadow="sm">
        <Title level={2} size="md">
          Body parameters
        </Title>

        <Field<RegisterFormValues>
          name="sex"
          label={UserFieldLabels.sex}
          controlType="controlled"
          required
        >
          <Select options={sexOptions} />
        </Field>

        <Field<RegisterFormValues>
          name="age"
          label={UserFieldLabels.age}
          helperText={UserFieldHelpers.age}
          required
          valueAsNumber
        >
          <TextInput type="number" step={1} inputMode="numeric" />
        </Field>

        <Field<RegisterFormValues>
          name="height"
          label={UserFieldLabels.height}
          helperText={UserFieldHelpers.height}
          required
          valueAsNumber
        >
          <TextInput type="number" />
        </Field>

        <Field<RegisterFormValues>
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

        <Field<RegisterFormValues>
          name="goal"
          label={UserFieldLabels.goal}
          controlType="controlled"
          required
        >
          <Select options={goalOptions} />
        </Field>

        <Field<RegisterFormValues>
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
