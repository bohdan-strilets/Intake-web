import { useCallback, useRef } from 'react';

const DEFAULT_THRESHOLD_PX = 60;
/** Мінімальне співвідношення горизонтального руху до вертикального (свайп лише якщо рух чітко горизонтальний). */
const MIN_HORIZONTAL_RATIO = 1.5;

export type UseSwipeOptions = {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  /** Мінімальна довжина свайпу в пікселях. */
  thresholdPx?: number;
  /** Мінімальне співвідношення |deltaX| / |deltaY| для визначення горизонтального свайпу (скрол не спрацьовує). */
  minHorizontalRatio?: number;
};

export const useSwipe = (options: UseSwipeOptions = {}) => {
  const {
    onSwipeLeft,
    onSwipeRight,
    thresholdPx = DEFAULT_THRESHOLD_PX,
    minHorizontalRatio = MIN_HORIZONTAL_RATIO,
  } = options;

  const start = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    start.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (start.current === null) return;
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - start.current.x;
      const deltaY = touch.clientY - start.current.y;
      start.current = null;

      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      // Мінімальна довжина свайпу
      if (absX < thresholdPx) return;

      // Тільки чіткий горизонтальний рух: горизонтальний переважає над вертикальним
      if (absY > 0 && absX / absY < minHorizontalRatio) return;

      if (deltaX > 0) {
        onSwipeRight?.();
      } else {
        onSwipeLeft?.();
      }
    },
    [onSwipeLeft, onSwipeRight, thresholdPx, minHorizontalRatio],
  );

  return { onTouchStart, onTouchEnd };
};
