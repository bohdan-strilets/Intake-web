import type { SelectOption } from '@shared/ui/controls/Select';

export const lossDeltaOptions: SelectOption<number | null>[] = [
  { label: 'None', value: null, isDisabled: false },
  { label: 'Small deficit (-200 kcal/day)', value: -200, isDisabled: false },
  {
    label: 'Moderate deficit (-400 kcal/day)',
    value: -400,
    isDisabled: false,
  },
  {
    label: 'Aggressive deficit (-600 kcal/day)',
    value: -600,
    isDisabled: false,
  },
];

export const gainDeltaOptions: SelectOption<number | null>[] = [
  { label: 'None', value: null, isDisabled: false },
  { label: 'Small surplus (+200 kcal/day)', value: 200, isDisabled: false },
  {
    label: 'Moderate surplus (+400 kcal/day)',
    value: 400,
    isDisabled: false,
  },
  {
    label: 'Aggressive surplus (+600 kcal/day)',
    value: 600,
    isDisabled: false,
  },
];
