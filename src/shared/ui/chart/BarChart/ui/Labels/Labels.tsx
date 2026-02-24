import { label } from './Labels.css';
import type { LabelsProps } from './Labels.types';

export const Labels = ({ position, value }: LabelsProps) => {
  return (
    <div className={label} style={{ left: `${position}%` }}>
      {value}
    </div>
  );
};
