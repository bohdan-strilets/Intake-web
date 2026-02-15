import type { SelectOption } from '@shared/ui/controls/Select';

import { SEX, type Sex } from '../enums';
import { sexLabelMap } from '../mappers';

export const sexOptions: SelectOption<Sex>[] = [
  { value: SEX.Male, label: sexLabelMap[SEX.Male], isDisabled: false },
  { value: SEX.Female, label: sexLabelMap[SEX.Female], isDisabled: false },
];
