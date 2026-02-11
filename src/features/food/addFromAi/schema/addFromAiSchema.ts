import { z } from '@shared/lib/zod';

export const addFromAiSchema = z.object({
  text: z
    .string()
    // .min(3, { message: UserValidationMessages.minLength(3) })
    .min(3)
    // .max(1000, { message: UserValidationMessages.maxLength(1000) }),
    .max(1000),
});
