import type { SelectOption } from '@shared/ui/controls/Select';

import { GOAL } from '../enums';
import { goalLabelMap } from '../mappers';

export const goalOptions: SelectOption[] = [
  { value: GOAL.Lose, label: goalLabelMap[GOAL.Lose], isDisabled: false },
  {
    value: GOAL.Maintain,
    label: goalLabelMap[GOAL.Maintain],
    isDisabled: false,
  },
  { value: GOAL.Gain, label: goalLabelMap[GOAL.Gain], isDisabled: false },
];
