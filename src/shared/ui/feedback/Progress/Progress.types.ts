export type ProgressProps = {
  value: number;
  target: number;
  unit?: string;
  label?: string;
  valueSize?: 'xs' | 'sm' | 'md';
  valueWeight?: 'medium' | 'bold';
};
