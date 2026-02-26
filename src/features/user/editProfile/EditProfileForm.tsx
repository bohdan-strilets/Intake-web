import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  createActivityLevelOptions,
  createGoalDeltaOptions,
  createGoalOptions,
  createSexOptions,
} from '@entities/user';

import { useTranslation } from '@shared/i18n';
import { Button } from '@shared/ui/controls/Button';
import { DatePicker } from '@shared/ui/controls/DatePicker';
import { Select } from '@shared/ui/controls/Select';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Card } from '@shared/ui/layout/Card';
import { Title } from '@shared/ui/typography/Title';

import { useSubmit } from './model';
import { createSchema } from './schema';
import type { FormProps, FormValues } from './types';

export const EditProfileForm = ({ initialState }: FormProps) => {
  const { t: tUser } = useTranslation('user');
  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');

  const schema = createSchema(tUser);

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
          {tProfile('sections.account')}
        </Title>

        <Field<FormValues> name="name" label={tUser('fields.name')}>
          <TextInput />
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
        >
          <Select options={createSexOptions(tUser)} />
        </Field>

        <Field<FormValues>
          name="dateOfBirth"
          label={tUser('fields.dateOfBirth')}
          controlType="controlled"
        >
          <DatePicker />
        </Field>

        <Field<FormValues>
          name="height"
          label={tUser('fields.height')}
          helperText={tUser('helpers.height')}
          valueAsNumber
        >
          <TextInput type="number" inputMode="decimal" />
        </Field>

        <Field<FormValues>
          name="weight"
          label={tUser('fields.weight')}
          helperText={tUser('helpers.weight')}
          valueAsNumber
        >
          <TextInput type="number" inputMode="decimal" />
        </Field>

        <Field<FormValues>
          name="targetWeight"
          label={tUser('fields.targetWeight')}
          helperText={tUser('helpers.targetWeight')}
          valueAsNumber
        >
          <TextInput type="number" inputMode="decimal" />
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
        >
          <Select options={createGoalOptions(tUser)} />
        </Field>

        {!isMaintainGoal && (
          <Field<FormValues>
            name="goalDelta"
            label={tUser('fields.goalDelta')}
            helperText={tUser('helpers.goalDelta')}
            controlType="controlled"
          >
            <Select
              options={
                goal === 'lose'
                  ? createGoalDeltaOptions(tUser, 'deficit')
                  : createGoalDeltaOptions(tUser, 'surplus')
              }
            />
          </Field>
        )}

        <Field<FormValues>
          name="activityLevel"
          label={tUser('fields.activityLevel')}
          helperText={tUser('helpers.activityLevel')}
          controlType="controlled"
        >
          <Select options={createActivityLevelOptions(tUser)} />
        </Field>
      </Card>

      {errors.root && <FormError>{errors.root.message}</FormError>}

      <Button type="submit" disabled={!isValid} loading={isPending} fullWidth>
        {tCommon('actions.save')}
      </Button>
    </Form>
  );
};
