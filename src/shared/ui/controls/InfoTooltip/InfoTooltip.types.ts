import type { ReactNode } from 'react';

export type InfoTooltipProps = {
  content: ReactNode;
  size?: 'sm' | 'md';
  position?: 'top' | 'bottom';
};
