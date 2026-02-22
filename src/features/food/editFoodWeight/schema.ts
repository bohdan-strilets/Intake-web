import { FoodConstraints } from '@entities/food';

import type { TFunction } from '@shared/i18n';
import { z } from '@shared/lib/zod';

export const createSchema = (t: TFunction<'food'>) =>
  z.object({
    weight: z
      .number(t('validation.weight.required'))
      .min(FoodConstraints.weight.min, {
        message: t('validation.weight.min'),
      })
      .max(FoodConstraints.weight.max, {
        message: t('validation.weight.max'),
      })
      .int(t('validation.weight.integer')),
  });
