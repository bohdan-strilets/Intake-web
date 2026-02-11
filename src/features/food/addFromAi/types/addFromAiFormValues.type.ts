import type { Infer } from '@shared/lib/zod';

import type { addFromAiSchema } from '../schema';

export type AddFromAiFormValues = Infer<typeof addFromAiSchema>;
