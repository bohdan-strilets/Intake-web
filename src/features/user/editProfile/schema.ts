import { ACTIVITY_LEVEL, GOAL, SEX, UserConstraints } from '@entities/user';

import type { TFunction } from '@shared/i18n';
import { isValidISODate, isWithinRange } from '@shared/lib/date';
import { hasOneDecimal } from '@shared/lib/number';
import { z } from '@shared/lib/zod';
import { dateRegex } from '@shared/regex';

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
        })
        .optional(),

      sex: z.enum(SEX, { message: t('validation.common.required') }).optional(),

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
        )
        .optional(),

      height: z
        .number(t('validation.common.number'))
        .min(UserConstraints.height.min, {
          message: t('validation.height.min', {
            min: UserConstraints.height.min,
          }),
        })
        .max(UserConstraints.height.max, {
          message: t('validation.height.max', {
            max: UserConstraints.height.max,
          }),
        })
        .refine(hasOneDecimal, {
          message: t('validation.common.decimal'),
        })
        .optional(),

      weight: z
        .number(t('validation.common.number'))
        .min(UserConstraints.weight.min, {
          message: t('validation.weight.min', {
            min: UserConstraints.weight.min,
          }),
        })
        .max(UserConstraints.weight.max, {
          message: t('validation.weight.max', {
            max: UserConstraints.weight.max,
          }),
        })
        .refine(hasOneDecimal, {
          message: t('validation.common.decimal'),
        })
        .optional(),

      targetWeight: z
        .number(t('validation.common.number'))
        .min(UserConstraints.targetWeight.min, {
          message: t('validation.targetWeight.min', {
            min: UserConstraints.targetWeight.min,
          }),
        })
        .max(UserConstraints.targetWeight.max, {
          message: t('validation.targetWeight.max', {
            max: UserConstraints.targetWeight.max,
          }),
        })
        .refine(hasOneDecimal, {
          message: t('validation.common.decimal'),
        })
        .optional()
        .nullable(),

      goal: z
        .enum(GOAL, { message: t('validation.common.required') })
        .optional(),

      goalDelta: z
        .number(t('validation.common.number'))
        .int({ message: t('validation.common.integer') })
        .min(UserConstraints.goalDelta.min, {
          message: t('validation.goalDelta.min', {
            min: UserConstraints.goalDelta.min,
          }),
        })
        .max(UserConstraints.goalDelta.max, {
          message: t('validation.goalDelta.max', {
            max: UserConstraints.goalDelta.max,
          }),
        })
        .optional()
        .nullable(),

      activityLevel: z
        .enum(ACTIVITY_LEVEL, {
          message: t('validation.common.required'),
        })
        .optional(),
    })
    .superRefine((data, ctx) => {
      const requiredFields: (keyof typeof data)[] = [
        'name',
        'sex',
        'dateOfBirth',
        'height',
        'weight',
        'goal',
        'activityLevel',
      ];

      for (const field of requiredFields) {
        if (data[field] === undefined) {
          ctx.addIssue({
            path: [field],
            code: z.ZodIssueCode.custom,
            message: t('validation.common.immutable'),
          });
        }
      }
    });
