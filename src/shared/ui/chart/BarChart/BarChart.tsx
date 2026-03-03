import { useRef, useState } from 'react';

import {
  wrapper,
  chartArea,
  chartContainer,
  chart,
  chartBg,
  chartContent,
  labelsWrapper,
  scaleWrapper,
  tooltip as tooltipClass,
} from './BarChart.css';
import { useBarChart } from './model';
import type { BarChartProps } from './types';
import { AverageLine } from './ui/AverageLine';
import { Bar } from './ui/Bar';
import { GuideLine } from './ui/GuideLine';
import { Labels } from './ui/Labels';
import { Scale } from './ui/Scale';

export const BarChart = ({
  items,
  average,
  goal,
  secondaryLine,
  height = 280,
  toneStrategy = 'above-is-bad',
  fewerGuides = false,
  fewerLabels = false,
  getTooltip,
}: BarChartProps) => {
  const [tooltip, setTooltip] = useState<{
    content: string;
    x: number;
    y: number;
  } | null>(null);
  const tooltipTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const TOOLTIP_DELAY_MS = 400;

  const dataMax = Math.max(
    0,
    ...items.map((i) => i.value).filter((v): v is number => v !== null),
  );

  const {
    scaleValues,
    guideValues,
    getBarMeta,
    shouldShowLabel,
    getScalePosition,
    averagePosition,
    secondaryLinePosition,
  } = useBarChart({
    goal,
    average,
    secondaryLine,
    dataMax,
    toneStrategy,
    itemsLength: items.length,
    fewerGuides,
    fewerLabels,
  });

  if (!items.length) return null;

  const handleTooltipShow = (e: React.MouseEvent<HTMLElement>, content: string) => {
    if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;
    tooltipTimeoutRef.current = setTimeout(() => {
      tooltipTimeoutRef.current = null;
      setTooltip({ content, x, y });
    }, TOOLTIP_DELAY_MS);
  };

  const handleTooltipHide = () => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
      tooltipTimeoutRef.current = null;
    }
    setTooltip(null);
  };

  return (
    <div className={wrapper} role="img" aria-label="Bar chart">
      <div className={chartArea}>
        <div className={chartContainer} style={{ height }}>
          <div className={chart}>
            <div className={chartBg} aria-hidden />
            <div className={chartContent}>
              {guideValues.map((value) => (
                <GuideLine key={value} position={getScalePosition(value)} />
              ))}

              {averagePosition !== undefined && (
                <AverageLine position={averagePosition} variant="accentSoft" />
              )}

              {secondaryLinePosition !== undefined &&
                secondaryLinePosition !== averagePosition && (
                  <AverageLine
                    position={secondaryLinePosition}
                    variant="warningSoft"
                  />
                )}

              {items.map((item, index) => {
                const { percent, tone } = getBarMeta(item.value);
                const tooltipContent = getTooltip?.(item, index);

                return (
                  <Bar
                    key={index}
                    tone={tone}
                    height={percent}
                    value={item.value}
                    title={getTooltip ? undefined : tooltipContent}
                    tooltipContent={tooltipContent}
                    onTooltipShow={handleTooltipShow}
                    onTooltipHide={handleTooltipHide}
                  />
                );
              })}
            </div>
          </div>

          <div className={scaleWrapper}>
            {scaleValues.map((value) => {
              const position = getScalePosition(value);
              // Clamp so min (0) and max labels stay visible and not clipped
              const clampedPosition = Math.min(98, Math.max(2, position));
              return (
                <Scale
                  key={value}
                  value={value}
                  position={clampedPosition}
                />
              );
            })}
          </div>
        </div>

        <div className={labelsWrapper}>
          {items.map((item, index) => {
            if (!item.label) return null;
            if (!shouldShowLabel(index)) return null;

            return <Labels key={index} value={item.label} />;
          })}
        </div>
      </div>

      {tooltip && (
        <div
          className={tooltipClass}
          style={{ left: tooltip.x, top: tooltip.y }}
          role="tooltip"
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
};
