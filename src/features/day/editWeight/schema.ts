import { UserConstraints } from '@entities/user';

import type { TFunction } from '@shared/i18n';
import { hasOneDecimal } from '@shared/lib/number';
import { z } from '@shared/lib/zod';

export const createSchema = (t: TFunction<'day'>) =>
  z.object({
    weight: z
      .number()
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
        message: t('validation.weight.decimal'),
      })
      .optional()
      .nullable(),
  });
