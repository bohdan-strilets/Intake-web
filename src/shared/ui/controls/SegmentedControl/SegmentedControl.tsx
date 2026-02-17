import { root, segment } from './SegmentedControl.css';
import type { SegmentedControlProps } from './SegmentedControl.types';

export const SegmentedControl = <T extends string>({
  value,
  options,
  onChange,
}: SegmentedControlProps<T>) => {
  return (
    <div className={root}>
      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            className={segment({ active: isActive })}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
