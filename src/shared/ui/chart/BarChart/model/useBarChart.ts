import { useMemo } from 'react';

import type { UseBarChartParams } from '../types';
import type { Tone } from '../ui/Bar/Bar.types';

import { calculateStep, createPercentCalculator } from './chartMath';

export const useBarChart = ({
  goal,
  average,
  toneStrategy,
  itemsLength,
}: UseBarChartParams) => {
  return useMemo(() => {
    const rawMax = Math.max(goal, average ?? 0, 1);

    const step = calculateStep(rawMax);
    const max = Math.ceil(rawMax / step) * step;

    const getPercent = createPercentCalculator(max);

    // ---- Scale ----
    const scaleValues: number[] = [];

    for (let v = 0; v < max; v += step) {
      scaleValues.push(v);
    }

    if (!scaleValues.includes(max)) {
      scaleValues.push(max);
    }

    const guideValues = scaleValues.filter((v) => v !== 0 && v !== max);

    // ---- Tone ----
    const resolveTone = (value: number | null): Tone => {
      if (value === null) return 'neutral';
      if (average === undefined) return 'success';

      const isAbove = value > average;

      if (toneStrategy === 'above-is-bad') {
        return isAbove ? 'danger' : 'success';
      }

      return isAbove ? 'success' : 'danger';
    };

    // ---- Bar meta ----
    const getBarMeta = (value: number | null) => {
      if (value === null) {
        return { percent: 0, tone: 'neutral' as Tone };
      }

      return {
        percent: Math.min(getPercent(value), 100),
        tone: resolveTone(value),
      };
    };

    // ---- Average ----
    const averagePosition =
      average !== undefined ? getPercent(Math.min(average, max)) : undefined;

    // ---- Label ----

    const shouldShowLabel = (index: number): boolean => {
      if (itemsLength <= 7) return true;
      if (itemsLength <= 14) return index % 2 === 0;
      if (itemsLength <= 31) return index % 3 === 0;
      return index % 5 === 0;
    };

    // ---- Scale position ----
    const getScalePosition = (value: number) => getPercent(value);

    return {
      scaleValues,
      guideValues,
      getBarMeta,
      shouldShowLabel,
      getScalePosition,
      averagePosition,
    };
  }, [goal, average, toneStrategy, itemsLength]);
};
