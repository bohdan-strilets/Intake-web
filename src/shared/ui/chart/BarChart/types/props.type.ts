export type BarChartItem = {
  value: number | null;
  label?: string;
};

export type ToneStrategy = 'above-is-bad' | 'above-is-good';

export type BarChartProps = {
  items: BarChartItem[];

  average?: number;
  goal: number;
  /** Second reference line (e.g. maintenance). */
  secondaryLine?: number;

  height?: number;
  toneStrategy?: ToneStrategy;
  fewerGuides?: boolean;
  fewerLabels?: boolean;

  /** Tooltip content for each bar (e.g. date + value). Shown on hover. */
  getTooltip?: (item: BarChartItem, index: number) => string;
};
