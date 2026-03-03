import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { createGoalDeltaOptions, createGoalOptions } from '@entities/user';

import { useTranslation } from '@shared/i18n';
import { Select } from '@shared/ui/controls/Select';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Stack } from '@shared/ui/layout/Stack';
import { HelperText } from '@shared/ui/typography/HelperText';

import type { FormValues } from '../types';

export const RegisterStepGoal = () => {
  const { t: tUser } = useTranslation('user');
  const { t: tAuth } = useTranslation('auth');
  const methods = useFormContext<FormValues>();

  const goal = methods.watch('goal');
  const isMaintainGoal = goal === 'maintain';

  useEffect(() => {
    if (isMaintainGoal) {
      methods.setValue('goalDelta', null, {
        shouldDirty: true,
        shouldValidate: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- methods from useFormContext is stable; omit to avoid loop when setValue triggers re-render
  }, [isMaintainGoal]);

  return (
    <Stack gap="xl">
      <HelperText>{tAuth('register.steps.goal.description')}</HelperText>

      <Field<FormValues>
        name="goal"
        label={tUser('fields.goal')}
        controlType="controlled"
        required
      >
        <Select options={createGoalOptions(tUser)} />
      </Field>

      {!isMaintainGoal && (
        <Field<FormValues>
          name="targetWeight"
          label={tUser('fields.targetWeight')}
          helperText={tUser('helpers.targetWeight')}
          valueAsNumber
        >
          <TextInput type="number" inputMode="decimal" />
        </Field>
      )}

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
    </Stack>
  );
};
