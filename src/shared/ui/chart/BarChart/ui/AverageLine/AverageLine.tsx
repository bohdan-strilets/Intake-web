import { line } from './AverageLine.css';
import type { AverageLineProps } from './AverageLine.types';

export const AverageLine = ({ position }: AverageLineProps) => {
  return <div className={line} style={{ bottom: `${position}%` }} />;
};
