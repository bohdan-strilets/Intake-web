import { zodResolver } from '@hookform/resolvers/zod';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { get, useForm } from 'react-hook-form';

import { useTranslation } from '@shared/i18n';
import { quickTransition } from '@shared/motion';
import { Button } from '@shared/ui/controls/Button';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Stack } from '@shared/ui/layout/Stack';

import { STEP_FIELDS, TOTAL_STEPS } from '../config/stepFields';
import { useSubmit } from '../model';
import { createSchema } from '../schema';
import { RegisterStepAccount } from '../steps/RegisterStepAccount';
import { RegisterStepActivity } from '../steps/RegisterStepActivity';
import { RegisterStepBio } from '../steps/RegisterStepBio';
import { RegisterStepBody } from '../steps/RegisterStepBody';
import { RegisterStepGoal } from '../steps/RegisterStepGoal';
import type { FormValues } from '../types';

import {
  dot,
  dotActive,
  dotCompleted,
  dots,
  progressRow,
  stepCounter,
} from './RegisterStepper.css';

const STEP_COMPONENTS = [
  RegisterStepAccount,
  RegisterStepBio,
  RegisterStepBody,
  RegisterStepGoal,
  RegisterStepActivity,
] as const;

const DEFAULT_VALUES: Partial<FormValues> = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  sex: '' as FormValues['sex'],
  dateOfBirth: '',
  height: undefined,
  weight: undefined,
  targetWeight: undefined,
  goal: '' as FormValues['goal'],
  goalDelta: null,
  activityLevel: undefined,
};

export const RegisterStepper = () => {
  const [step, setStep] = useState(0);
  const { t: tUser } = useTranslation('user');
  const { t: tAuth } = useTranslation('auth');
  const { t: tCommon } = useTranslation('common');

  const schema = createSchema(tUser);
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: DEFAULT_VALUES,
  });

  const { trigger, formState } = methods;
  const { errors } = formState;
  const { onSubmit, isPending } = useSubmit(methods);

  const stepFields = STEP_FIELDS[step as keyof typeof STEP_FIELDS];
  const isLastStep = step === TOTAL_STEPS - 1;
  const StepComponent = STEP_COMPONENTS[step];

  const handleContinue = async () => {
    const valid = await trigger(stepFields);
    if (!valid) return;

    if (isLastStep) {
      methods.handleSubmit(onSubmit)();
      return;
    }

    setStep((s) => s + 1);
  };

  const handleBack = () => {
    setStep((s) => Math.max(0, s - 1));
  };

  const isStepValid = stepFields.every((field) => !get(errors, field)?.message);

  return (
    <Form<FormValues> methods={methods} onSubmit={onSubmit}>
      <Stack gap="xl">
        <div className={progressRow}>
          <div className={dots}>
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => {
              const isActive = i === step;
              const isCompleted = i < step;
              return (
                <div
                  key={i}
                  className={clsx(
                    dot,
                    isActive && dotActive,
                    isCompleted && dotCompleted,
                  )}
                  aria-current={isActive ? 'step' : undefined}
                />
              );
            })}
          </div>
          <span className={stepCounter}>
            {tAuth('register.progress', {
              current: step + 1,
              total: TOTAL_STEPS,
            })}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={quickTransition}
          >
            <StepComponent />
          </motion.div>
        </AnimatePresence>

        {errors.root && <FormError>{errors.root.message}</FormError>}

        <Stack gap="md">
          <Button
            type="button"
            variant="primary"
            size="lg"
            fullWidth
            disabled={!isStepValid}
            loading={isLastStep && isPending}
            onClick={handleContinue}
          >
            {isLastStep
              ? tAuth('actions.createAccount')
              : tCommon('actions.continue')}
          </Button>

          {step > 0 && (
            <Button
              type="button"
              variant="ghostMuted"
              size="md"
              fullWidth
              iconLeft="chevronLeft"
              onClick={handleBack}
              disabled={isPending}
            >
              {tCommon('actions.back')}
            </Button>
          )}
        </Stack>
      </Stack>
    </Form>
  );
};
