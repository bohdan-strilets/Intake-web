import type { TFunction } from '@shared/i18n';
import type { SelectOption } from '@shared/ui/controls/Select';

const DELTA_VALUES = [200, 400, 600] as const;

export const createGoalDeltaOptions = (
  t: TFunction<'user'>,
  type: 'deficit' | 'surplus',
): SelectOption<number | null>[] => {
  const sign = type === 'deficit' ? -1 : 1;

  const options: SelectOption<number | null>[] = [
    {
      value: null,
      label: t('goalDelta.none'),
      isDisabled: false,
    },
  ];

  DELTA_VALUES.forEach((value, index) => {
    const intensities = ['small', 'moderate', 'aggressive'] as const;
    const intensity = intensities[index];

    options.push({
      value: value * sign,
      label: t(`goalDelta.${type}.${intensity}`, { value }),
      isDisabled: false,
    });
  });

  return options;
};
