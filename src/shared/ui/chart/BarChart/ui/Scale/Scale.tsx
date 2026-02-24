import { scaleValue } from './Scale.css';
import type { ScaleProps } from './Scale.types';

export const Scale = ({ position, value }: ScaleProps) => {
  return (
    <div className={scaleValue} style={{ bottom: `${position}%` }}>
      {value}
    </div>
  );
};
