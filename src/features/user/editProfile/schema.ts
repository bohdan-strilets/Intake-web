import {
  ACTIVITY_LEVEL,
  GOAL,
  SEX,
  UserConstraints,
  UserValidationMessages,
} from '@entities/user';

import { hasOneDecimal } from '@shared/lib/number';
import { z } from '@shared/lib/zod';

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

    age: z
      .number(UserValidationMessages.common.type)
      .int({ message: UserValidationMessages.common.integer })
      .min(UserConstraints.age.min, { message: UserValidationMessages.age.min })
      .max(UserConstraints.age.max, {
        message: UserValidationMessages.age.max,
      })
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
      'age',
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
