import { PasswordConstraints } from '@entities/user';

import type { TFunction } from '@shared/i18n';
import { z } from '@shared/lib/zod';
import { digitRegex, letterRegex } from '@shared/regex';

export const createSchema = (t: TFunction<'user'>) =>
  z
    .object({
      newPassword: z
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
        .regex(letterRegex, { message: t('validation.password.letter') })
        .regex(digitRegex, { message: t('validation.password.digit') }),

      confirmPassword: z.string().min(1, { message: t('validation.common.required') }),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: t('validation.password.match'),
      path: ['confirmPassword'],
    });
