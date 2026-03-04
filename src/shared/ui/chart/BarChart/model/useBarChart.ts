import { useMemo } from 'react';

import type { UseBarChartParams } from '../types';
import type { Tone } from '../ui/Bar/Bar.types';

import { calculateStep, createPercentCalculator } from './chartMath';

export const useBarChart = ({
  goal,
  average,
  secondaryLine,
  dataMax = 0,
  toneStrategy,
  itemsLength,
  fewerGuides = false,
  fewerLabels = false,
}: UseBarChartParams) => {
  return useMemo(() => {
    const rawMax = Math.max(goal, average ?? 0, secondaryLine ?? 0, dataMax, 1);

    // Use 6 steps so scale labels go every 1000 (e.g. 0, 1000, 2000, …) instead of every 2000
    const step = calculateStep(rawMax, 6);
    const max = Math.ceil(rawMax / step) * step;
    // Smaller headroom above max (half step) so top isn't too far
    const scaleMax = max + step * 0.5;

    const getPercent = createPercentCalculator(scaleMax);

    // ---- Scale: always include min (0) and max, plus steps in between ----
    const scaleValues: number[] = [];
    for (let v = 0; v <= max; v += step) {
      scaleValues.push(v);
    }
    if (!scaleValues.includes(max)) {
      scaleValues.push(max);
    }
    if (!scaleValues.includes(0)) {
      scaleValues.unshift(0);
    }
    scaleValues.sort((a, b) => a - b);

    // One guide line per scale label, except first (0) — include max
    const guideValues = scaleValues.filter((v) => v !== 0);

    // ---- Tone: 3 states when goal + TDEE (secondaryLine) —
    //   < goal = success (green), goal..TDEE = warning, > TDEE = danger
    const resolveTone = (value: number | null): Tone => {
      if (value === null) return 'neutral';
      if (average === undefined) return 'success';

      const goalVal = average;
      if (value < goalVal) return 'success';
      if (secondaryLine !== undefined) {
        if (value <= secondaryLine) return 'warning';
        return 'danger';
      }
      // Fallback: only goal, no TDEE
      if (toneStrategy === 'above-is-bad') {
        return value > goalVal ? 'danger' : 'success';
      }
      return value > goalVal ? 'success' : 'danger';
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

    // ---- Reference lines ----
    const averagePosition =
      average !== undefined
        ? getPercent(Math.min(average, scaleMax))
        : undefined;
    const secondaryLinePosition =
      secondaryLine !== undefined
        ? getPercent(Math.min(secondaryLine, scaleMax))
        : undefined;

    // ---- Labels (fewer when fewerLabels) ----
    const shouldShowLabel = (index: number): boolean => {
      if (itemsLength <= 7) return true;
      if (fewerLabels) {
        if (itemsLength <= 14) return index % 3 === 0;
        if (itemsLength <= 31) return index % 6 === 0;
        return index % 7 === 0;
      }
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
      secondaryLinePosition,
    };
  }, [
    goal,
    average,
    secondaryLine,
    dataMax,
    toneStrategy,
    itemsLength,
    fewerGuides,
    fewerLabels,
  ]);
};
