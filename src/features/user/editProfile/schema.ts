import {
  ACTIVITY_LEVEL,
  GOAL,
  SEX,
  UserConstraints,
  UserValidationMessages,
} from '@entities/user';

import { isValidISODate, isWithinRange } from '@shared/lib/date';
import { hasOneDecimal } from '@shared/lib/number';
import { z } from '@shared/lib/zod';
import { dateRegex } from '@shared/regex';

export const schema = z
  .object({
    name: z
      .string()
      .min(UserConstraints.name.minLength, {
        message: UserValidationMessages.name.min,
      })
      .max(UserConstraints.name.maxLength, {
        message: UserValidationMessages.name.max,
      })
      .optional(),

    sex: z
      .enum(SEX, { message: UserValidationMessages.common.required })
      .optional(),

    dateOfBirth: z
      .string()
      .regex(dateRegex, {
        message: UserValidationMessages.dateOfBirth.invalid,
      })
      .refine(isValidISODate, {
        message: UserValidationMessages.dateOfBirth.invalid,
      })
      .refine(
        (value) =>
          isWithinRange(
            value,
            UserConstraints.dateOfBirth.minDate,
            UserConstraints.dateOfBirth.maxDate,
          ),
        {
          message: UserValidationMessages.dateOfBirth.invalid,
        },
      )
      .optional(),

    height: z
      .number(UserValidationMessages.common.type)
      .min(UserConstraints.height.min, {
        message: UserValidationMessages.height.min,
      })
      .max(UserConstraints.height.max, {
        message: UserValidationMessages.height.max,
      })
      .refine(hasOneDecimal, { message: UserValidationMessages.common.decimal })
      .optional(),

    weight: z
      .number(UserValidationMessages.common.type)
      .min(UserConstraints.weight.min, {
        message: UserValidationMessages.weight.min,
      })
      .max(UserConstraints.weight.max, {
        message: UserValidationMessages.weight.max,
      })
      .refine(hasOneDecimal, { message: UserValidationMessages.common.decimal })
      .optional(),

    targetWeight: z
      .number(UserValidationMessages.common.type)
      .min(UserConstraints.targetWeight.min, {
        message: UserValidationMessages.targetWeight.min,
      })
      .max(UserConstraints.targetWeight.max, {
        message: UserValidationMessages.targetWeight.max,
      })
      .refine(hasOneDecimal, {
        message: UserValidationMessages.common.decimal,
      })
      .optional()
      .nullable(),

    goal: z
      .enum(GOAL, { message: UserValidationMessages.common.required })
      .optional(),

    goalDelta: z
      .number(UserValidationMessages.common.type)
      .int({ message: UserValidationMessages.common.integer })
      .min(UserConstraints.goalDelta.min, {
        message: UserValidationMessages.goalDelta.min,
      })
      .max(UserConstraints.goalDelta.max, {
        message: UserValidationMessages.goalDelta.max,
      })
      .optional()
      .nullable(),

    activityLevel: z
      .enum(ACTIVITY_LEVEL, {
        message: UserValidationMessages.common.required,
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
          message: UserValidationMessages.common.immutable,
        });
      }
    }
  });
