import {
  PasswordConstraints,
  UserValidationMessages,
} from '@entities/user/meta';

import { z } from '@shared/lib/zod';
import { digitRegex, letterRegex } from '@shared/regex';

export const schema = z.object({
  currentPassword: z
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

  newPassword: z
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
});
