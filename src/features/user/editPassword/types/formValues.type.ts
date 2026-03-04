import type { Infer } from '@shared/lib/zod';

import type { createSchema } from '../schema';

export type FormValues = Infer<ReturnType<typeof createSchema>>;
