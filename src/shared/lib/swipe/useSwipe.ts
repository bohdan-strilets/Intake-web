import { useCallback, useRef } from 'react';

const DEFAULT_THRESHOLD_PX = 50;

export type UseSwipeOptions = {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  thresholdPx?: number;
};

export const useSwipe = (options: UseSwipeOptions = {}) => {
  const {
    onSwipeLeft,
    onSwipeRight,
    thresholdPx = DEFAULT_THRESHOLD_PX,
  } = options;

  const startX = useRef<number | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (startX.current === null) return;
      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX.current;
      startX.current = null;

      if (Math.abs(deltaX) < thresholdPx) return;

      if (deltaX > 0) {
        onSwipeRight?.();
      } else {
        onSwipeLeft?.();
      }
    },
    [onSwipeLeft, onSwipeRight, thresholdPx],
  );

  return { onTouchStart, onTouchEnd };
};
