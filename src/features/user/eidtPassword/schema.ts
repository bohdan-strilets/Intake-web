import { PasswordConstraints } from '@entities/user/meta';

import type { TFunction } from '@shared/i18n';
import { z } from '@shared/lib/zod';
import { digitRegex, letterRegex } from '@shared/regex';

export const createSchema = (t: TFunction<'user'>) =>
  z
    .object({
      currentPassword: z
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
        .regex(letterRegex, {
          message: t('validation.password.letter'),
        })
        .regex(digitRegex, {
          message: t('validation.password.digit'),
        }),

      confirmNewPassword: z.string(),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
      message: t('validation.password.match'),
      path: ['confirmNewPassword'],
    });
