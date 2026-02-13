import type { Infer } from '@shared/lib/zod';

import type { schema } from '../schema';

export type FormValues = Infer<typeof schema>;
