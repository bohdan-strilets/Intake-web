import { hole, ring, ringEmpty, wrapper } from './DonutChart.css';

export type DonutChartSegment = {
  value: number;
  color: string;
};

export type DonutChartProps = {
  segments: DonutChartSegment[];
  size?: number;
  thickness?: number;
};

const DEFAULT_SIZE = 120;
const DEFAULT_THICKNESS = 16;

/** Build conic-gradient stops from segments (percent of total). */
function buildConicGradient(
  segments: DonutChartSegment[],
  total: number,
): string {
  let acc = 0;
  const stops = segments.map(({ value, color }) => {
    const start = acc;
    acc += value / total;
    return `${color} ${start * 100}% ${acc * 100}%`;
  });
  return `conic-gradient(from 0deg, ${stops.join(', ')})`;
}

export function DonutChart({
  segments,
  size = DEFAULT_SIZE,
  thickness = DEFAULT_THICKNESS,
}: DonutChartProps) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const isEmpty = total === 0;

  const gradient = isEmpty
    ? undefined
    : buildConicGradient(
        segments.filter((s) => s.value > 0),
        total,
      );

  const holeSize = size - thickness * 2;

  return (
    <div
      className={wrapper}
      style={{
        width: size,
        height: size,
        ['--donut-gradient' as string]: gradient ?? 'transparent',
      }}
    >
      <div
        className={isEmpty ? ringEmpty : ring}
        style={isEmpty ? { borderWidth: thickness } : undefined}
        aria-hidden
      />
      <div
        className={hole}
        style={{
          width: holeSize,
          height: holeSize,
        }}
        aria-hidden
      />
    </div>
  );
}
