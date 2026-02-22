import { FoodConstraints } from '@entities/food';

import type { TFunction } from '@shared/i18n';
import { z } from '@shared/lib/zod';

export const createSchema = (t: TFunction<'food'>) =>
  z.object({
    text: z
      .string(t('validation.text.required'))
      .min(FoodConstraints.text.minLength, {
        message: t('validation.text.minLength'),
      })
      .max(FoodConstraints.text.maxLength, {
        message: t('validation.text.maxLength'),
      }),
  });
