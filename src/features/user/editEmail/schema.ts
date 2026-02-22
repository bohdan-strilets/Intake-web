import type { TFunction } from '@shared/i18n';
import { z } from '@shared/lib/zod';

export const createSchema = (t: TFunction<'user'>) =>
  z.object({
    email: z.string().email({
      message: t('validation.email.invalid'),
    }),
  });
