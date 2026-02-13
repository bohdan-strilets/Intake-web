import {
  PasswordConstraints,
  UserConstraints,
  UserValidationMessages,
  ACTIVITY_LEVEL,
  GOAL,
  SEX,
} from '@entities/user';

import { z } from '@shared/lib/zod';
import { digitRegex, letterRegex } from '@shared/regex';

export const schema = z.object({
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

  sex: z.enum(SEX, { message: UserValidationMessages.sex.required }),

  age: z
    .number(UserValidationMessages.age.type)
    .int({ message: UserValidationMessages.age.integer })
    .min(UserConstraints.age.min, { message: UserValidationMessages.age.min })
    .max(UserConstraints.age.max, {
      message: UserValidationMessages.age.max,
    }),

  height: z
    .number(UserValidationMessages.height.type)
    .int({ message: UserValidationMessages.height.integer })
    .min(UserConstraints.height.min, {
      message: UserValidationMessages.height.min,
    })
    .max(UserConstraints.height.max, {
      message: UserValidationMessages.height.max,
    }),

  weight: z
    .number(UserValidationMessages.weight.type)
    .int({ message: UserValidationMessages.weight.integer })
    .min(UserConstraints.weight.min, {
      message: UserValidationMessages.weight.min,
    })
    .max(UserConstraints.weight.max, {
      message: UserValidationMessages.weight.max,
    }),

  goal: z.enum(GOAL, { message: UserValidationMessages.goal.required }),

  activityLevel: z.enum(ACTIVITY_LEVEL, {
    message: UserValidationMessages.activityLevel.required,
  }),
});
