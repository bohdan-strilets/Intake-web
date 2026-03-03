import { line } from './AverageLine.css';
import type { AverageLineProps } from './AverageLine.types';

export const AverageLine = ({
  position,
  variant = 'accentSoft',
}: AverageLineProps) => {
  return (
    <div
      className={line({ variant })}
      style={{ bottom: `${position}%` }}
    />
  );
};
