import { z } from '@shared/lib/zod';

export const editWeightSchema = z.object({
  weight: z.number().min(1).max(5000),
});
