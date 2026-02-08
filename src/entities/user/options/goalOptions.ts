import type { SelectOption } from '@shared/ui/controls/Select';

import { GOAL } from '../enums';

export const goalOptions: SelectOption[] = [
  { value: GOAL.Lose, label: 'Lose weight', isDisabled: false },
  { value: GOAL.Maintain, label: 'Maintain', isDisabled: false },
  { value: GOAL.Gain, label: 'Gain weight', isDisabled: false },
];
