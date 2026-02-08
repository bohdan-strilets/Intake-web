import type { SelectOption } from '@shared/ui/controls/Select';

import { SEX } from '../enums';

export const sexOptions: SelectOption[] = [
  { value: SEX.Male, label: 'Male', isDisabled: false },
  { value: SEX.Female, label: 'Female', isDisabled: false },
];
