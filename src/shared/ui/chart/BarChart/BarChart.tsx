import {
  wrapper,
  chartArea,
  chartContainer,
  chart,
  labelsWrapper,
  scaleWrapper,
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
  height = 220,
  toneStrategy = 'above-is-bad',
}: BarChartProps) => {
  const {
    scaleValues,
    guideValues,
    getBarMeta,
    shouldShowLabel,
    getScalePosition,
    averagePosition,
  } = useBarChart({
    goal,
    average,
    toneStrategy,
    itemsLength: items.length,
  });

  if (!items.length) return null;

  return (
    <div className={wrapper}>
      <div className={chartArea}>
        <div className={chartContainer} style={{ height }}>
          <div className={chart}>
            {guideValues.map((value) => (
              <GuideLine key={value} position={getScalePosition(value)} />
            ))}

            {averagePosition !== undefined && (
              <AverageLine position={averagePosition} />
            )}

            {items.map((item, index) => {
              const { percent, tone } = getBarMeta(item.value);

              return (
                <Bar
                  key={index}
                  tone={tone}
                  height={percent}
                  value={item.value}
                />
              );
            })}
          </div>

          <div className={scaleWrapper}>
            {scaleValues.map((value) => (
              <Scale
                key={value}
                value={value}
                position={getScalePosition(value)}
              />
            ))}
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
    </div>
  );
};
