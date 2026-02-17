import type { ReactNode } from 'react';

export type SegmentedOption<T extends string> = {
  label: ReactNode;
  value: T;
};

export type SegmentedControlProps<T extends string> = {
  value: T;
  options: SegmentedOption<T>[];
  onChange: (value: T) => void;
};
