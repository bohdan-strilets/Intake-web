import type { Infer } from '@shared/lib/zod';

import type { editWeightSchema } from '../schema';

export type EditWeightFormValues = Infer<typeof editWeightSchema>;
