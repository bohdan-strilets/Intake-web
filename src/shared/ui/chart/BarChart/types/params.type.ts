import type { ToneStrategy } from './props.type';

export type UseBarChartParams = {
  goal: number;
  average?: number;
  /** Second reference line (e.g. maintenance/TDEE). */
  secondaryLine?: number;
  /** Max value from data (bars); scale will include this so bars never exceed top label. */
  dataMax?: number;
  toneStrategy: ToneStrategy;
  itemsLength: number;
  fewerGuides?: boolean;
  fewerLabels?: boolean;
};
