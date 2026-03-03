import type { RecipeVariants } from '@vanilla-extract/recipes';

import type { bar } from './Bar.css';

export type BarVariants = RecipeVariants<typeof bar>;
export type Tone = 'success' | 'warning' | 'danger' | 'neutral';

export type BarProps = BarVariants & {
  height: number;
  value: number | null;
  /** Tooltip text (for native title fallback) */
  title?: string;
  /** Custom tooltip: show on hover */
  tooltipContent?: string;
  onTooltipShow?: (e: React.MouseEvent<HTMLElement>, content: string) => void;
  onTooltipHide?: () => void;
};
