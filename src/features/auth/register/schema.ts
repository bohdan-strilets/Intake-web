import {
  PasswordConstraints,
  UserConstraints,
  ACTIVITY_LEVEL,
  GOAL,
  SEX,
} from '@entities/user';

import type { TFunction } from '@shared/i18n';
import { isValidISODate, isWithinRange } from '@shared/lib/date';
import { z } from '@shared/lib/zod';
import { dateRegex, digitRegex, letterRegex } from '@shared/regex';

export const createSchema = (t: TFunction<'user'>) =>
  z
    .object({
      name: z
        .string()
        .min(UserConstraints.name.minLength, {
          message: t('validation.name.min', {
            min: UserConstraints.name.minLength,
          }),
        })
        .max(UserConstraints.name.maxLength, {
          message: t('validation.name.max', {
            max: UserConstraints.name.maxLength,
          }),
        }),

      email: z.string().email({ message: t('validation.email.invalid') }),

      password: z
        .string()
        .min(PasswordConstraints.password.min, {
          message: t('validation.password.min', {
            min: PasswordConstraints.password.min,
          }),
        })
        .max(PasswordConstraints.password.max, {
          message: t('validation.password.max', {
            max: PasswordConstraints.password.max,
          }),
        })
        .regex(letterRegex, {
          message: t('validation.password.letter'),
        })
        .regex(digitRegex, {
          message: t('validation.password.digit'),
        }),

      confirmPassword: z.string(),

      sex: z.enum(SEX, { message: t('validation.common.required') }),

      dateOfBirth: z
        .string()
        .regex(dateRegex, {
          message: t('validation.dateOfBirth.invalid'),
        })
        .refine(isValidISODate, {
          message: t('validation.dateOfBirth.invalid'),
        })
        .refine(
          (value) =>
            isWithinRange(
              value,
              UserConstraints.dateOfBirth.minDate,
              UserConstraints.dateOfBirth.maxDate,
            ),
          {
            message: t('validation.dateOfBirth.invalid'),
          },
        ),

      height: z
        .number({ message: t('validation.common.number') })
        .int({ message: t('validation.common.integer') })
        .min(UserConstraints.height.min, {
          message: t('validation.height.min', {
            min: UserConstraints.height.min,
          }),
        })
        .max(UserConstraints.height.max, {
          message: t('validation.height.max', {
            max: UserConstraints.height.max,
          }),
        }),

      weight: z
        .number({ message: t('validation.common.number') })
        .int({ message: t('validation.common.integer') })
        .min(UserConstraints.weight.min, {
          message: t('validation.weight.min', {
            min: UserConstraints.weight.min,
          }),
        })
        .max(UserConstraints.weight.max, {
          message: t('validation.weight.max', {
            max: UserConstraints.weight.max,
          }),
        }),

      goal: z.enum(GOAL, { message: t('validation.common.required') }),

      activityLevel: z.enum(ACTIVITY_LEVEL, {
        message: t('validation.common.required'),
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t('validation.password.match'),
      path: ['confirmPassword'],
    });
