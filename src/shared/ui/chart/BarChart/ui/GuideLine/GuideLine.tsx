import { line } from './GuideLine.css';
import type { GuideLineProps } from './GuideLine.types';

export const GuideLine = ({ position }: GuideLineProps) => {
  return <div className={line} style={{ bottom: `${position}%` }} />;
};
