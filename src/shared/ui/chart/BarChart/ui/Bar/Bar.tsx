import { bar, wrapper } from './Bar.css';
import type { BarProps } from './Bar.types';

export const Bar = ({ tone, height, value }: BarProps) => {
  return (
    <div className={wrapper}>
      <div
        className={bar({ tone, opacity: value === null ? 'faded' : 'default' })}
        style={{ height: `${height}%` }}
      />
    </div>
  );
};
