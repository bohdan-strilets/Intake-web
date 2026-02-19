import {
  PasswordConstraints,
  UserConstraints,
  UserValidationMessages,
  ACTIVITY_LEVEL,
  GOAL,
  SEX,
} from '@entities/user';

import { isValidISODate, isWithinRange } from '@shared/lib/date';
import { z } from '@shared/lib/zod';
import { dateRegex, digitRegex, letterRegex } from '@shared/regex';

export const schema = z
  .object({
    name: z
      .string()
      .min(UserConstraints.name.minLength, {
        message: UserValidationMessages.name.min,
      })
      .max(UserConstraints.name.maxLength, {
        message: UserValidationMessages.name.max,
      }),

    email: z.string().email({ message: UserValidationMessages.email.invalid }),

    password: z
      .string()
      .min(PasswordConstraints.password.min, {
        message: UserValidationMessages.password.min,
      })
      .max(PasswordConstraints.password.max, {
        message: UserValidationMessages.password.max,
      })
      .regex(letterRegex, {
        message: UserValidationMessages.password.letter,
      })
      .regex(digitRegex, {
        message: UserValidationMessages.password.digit,
      }),

    confirmPassword: z.string(),

    sex: z.enum(SEX, { message: UserValidationMessages.common.required }),

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
      ),

    height: z
      .number(UserValidationMessages.common.type)
      .int({ message: UserValidationMessages.common.integer })
      .min(UserConstraints.height.min, {
        message: UserValidationMessages.height.min,
      })
      .max(UserConstraints.height.max, {
        message: UserValidationMessages.height.max,
      }),

    weight: z
      .number(UserValidationMessages.common.type)
      .int({ message: UserValidationMessages.common.integer })
      .min(UserConstraints.weight.min, {
        message: UserValidationMessages.weight.min,
      })
      .max(UserConstraints.weight.max, {
        message: UserValidationMessages.weight.max,
      }),

    goal: z.enum(GOAL, { message: UserValidationMessages.common.required }),

    activityLevel: z.enum(ACTIVITY_LEVEL, {
      message: UserValidationMessages.common.required,
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: UserValidationMessages.password.match,
    path: ['confirmPassword'],
  });
