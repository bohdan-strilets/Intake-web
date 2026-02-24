import type { ToneStrategy } from './props.type';

export type UseBarChartParams = {
  goal: number;
  average?: number;
  toneStrategy: ToneStrategy;
  itemsLength: number;
};
