import { useCallback, useState } from 'react';

import type { UseKeyboardNavigationParams } from './keyboardNavigation.types';

export function useKeyboardNavigation({
  isOpen,
  itemsLength,
  onSelect,
  onClose,
}: UseKeyboardNavigationParams) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const reset = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen || itemsLength === 0) return;

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          setActiveIndex((i) =>
            i === null || i === itemsLength - 1 ? 0 : i + 1,
          );
          break;
        }

        case 'ArrowUp': {
          e.preventDefault();
          setActiveIndex((i) =>
            i === null || i === 0 ? itemsLength - 1 : i - 1,
          );
          break;
        }

        case 'Enter': {
          e.preventDefault();
          if (activeIndex !== null) {
            onSelect(activeIndex);
            reset();
          }
          break;
        }

        case 'Escape': {
          onClose();
          reset();
          break;
        }
      }
    },
    [isOpen, itemsLength, activeIndex, onSelect, onClose, reset],
  );

  return {
    activeIndex,
    setActiveIndex,
    handleKeyDown,
    reset,
  };
}
