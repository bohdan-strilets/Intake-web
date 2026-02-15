import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  UserFieldHelpers,
  UserFieldLabels,
  activityLevelOptions,
  gainDeltaOptions,
  goalOptions,
  lossDeltaOptions,
  sexOptions,
} from '@entities/user';

import { Button } from '@shared/ui/controls/Button';
import { Select } from '@shared/ui/controls/Select';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Card } from '@shared/ui/layout/Card';
import { Title } from '@shared/ui/typography/Title';

import { useSubmit } from './model';
import { schema } from './schema';
import type { FormProps, FormValues } from './types';

export const EditProfileForm = ({ initialState }: FormProps) => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: initialState,
  });

  const { isValid, errors } = methods.formState;
  const { onSubmit, isPending } = useSubmit(methods);

  const goal = methods.watch('goal');
  const isMaintainGoal = goal === 'maintain';

  useEffect(() => {
    if (isMaintainGoal) {
      methods.setValue('goalDelta', null, {
        shouldDirty: true,
        shouldValidate: true,
      });
    }
  }, [isMaintainGoal, methods]);

  return (
    <Form<FormValues> methods={methods} onSubmit={onSubmit}>
      <Card gap="lg" shadow="sm">
        <Title level={2} size="md">
          Account
        </Title>

        <Field<FormValues> name="name" label={UserFieldLabels.name}>
          <TextInput />
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
        >
          <Select options={sexOptions} />
        </Field>

        <Field<FormValues>
          name="age"
          label={UserFieldLabels.age}
          helperText={UserFieldHelpers.age}
          valueAsNumber
        >
          <TextInput type="number" step={1} inputMode="numeric" />
        </Field>

        <Field<FormValues>
          name="height"
          label={UserFieldLabels.height}
          helperText={UserFieldHelpers.height}
          valueAsNumber
        >
          <TextInput type="number" />
        </Field>

        <Field<FormValues>
          name="weight"
          label={UserFieldLabels.weight}
          helperText={UserFieldHelpers.weight}
          valueAsNumber
        >
          <TextInput type="number" />
        </Field>

        <Field<FormValues>
          name="targetWeight"
          label={UserFieldLabels.targetWeight}
          helperText={UserFieldHelpers.targetWeight}
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
        >
          <Select options={goalOptions} />
        </Field>

        {!isMaintainGoal && (
          <Field<FormValues>
            name="goalDelta"
            label={UserFieldLabels.goalDelta}
            helperText={UserFieldHelpers.goalDelta}
            controlType="controlled"
          >
            <Select
              options={goal === 'lose' ? lossDeltaOptions : gainDeltaOptions}
            />
          </Field>
        )}

        <Field<FormValues>
          name="activityLevel"
          label={UserFieldLabels.activityLevel}
          helperText={UserFieldHelpers.activityLevel}
          controlType="controlled"
        >
          <Select options={activityLevelOptions} />
        </Field>
      </Card>

      {errors.root && <FormError>{errors.root.message}</FormError>}

      <Button type="submit" disabled={!isValid} loading={isPending} fullWidth>
        Save
      </Button>
    </Form>
  );
};
