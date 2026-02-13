import type { SelectOption } from '@shared/ui/controls/Select';

import { SEX } from '../enums';
import { sexLabelMap } from '../mappers';

export const sexOptions: SelectOption[] = [
  { value: SEX.Male, label: sexLabelMap[SEX.Male], isDisabled: false },
  { value: SEX.Female, label: sexLabelMap[SEX.Female], isDisabled: false },
];
