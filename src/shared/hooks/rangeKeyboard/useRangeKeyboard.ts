import { useCallback } from 'react';

type UseRangeKeyboardParams = {
  min: number;
  max: number;
  step: number;
  disabled?: boolean;
  value?: number;
  onChange: (next: number) => void;
};

export const useRangeKeyboard = ({
  min,
  max,
  disabled,
  value,
  onChange,
}: UseRangeKeyboardParams) => {
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (disabled) return;

      const current =
        typeof value === 'number' ? value : Number(event.currentTarget.value);
      if (Number.isNaN(current)) return;

      let next = current;

      switch (event.key) {
        case 'Home':
          event.preventDefault();
          next = min;
          break;
        case 'End':
          event.preventDefault();
          next = max;
          break;
        default:
          return;
      }

      if (next !== current) {
        onChange(next);
      }
    },
    [disabled, value, min, max, onChange],
  );

  return { handleKeyDown };
};
