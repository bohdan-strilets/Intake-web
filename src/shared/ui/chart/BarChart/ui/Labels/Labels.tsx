import { label } from './Labels.css';
import type { LabelsProps } from './Labels.types';

export const Labels = ({ value }: LabelsProps) => {
  return <div className={label}>{value}</div>;
};
