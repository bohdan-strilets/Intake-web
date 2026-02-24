export type BarChartItem = {
  value: number | null;
  label?: string;
};

export type ToneStrategy = 'above-is-bad' | 'above-is-good';

export type BarChartProps = {
  items: BarChartItem[];

  average?: number;
  goal: number;

  height?: number;
  toneStrategy?: ToneStrategy;
};
