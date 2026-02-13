import { clsx } from 'clsx';

import { root } from './Spacer.css';
import type { SpacerProps } from './Spacer.types';

export const Spacer = ({ size, direction }: SpacerProps) => {
  return <div className={clsx(root({ direction, size }))} />;
};
