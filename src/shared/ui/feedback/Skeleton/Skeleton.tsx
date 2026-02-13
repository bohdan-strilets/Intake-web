import { clsx } from 'clsx';

import { root } from './Skeleton.css';
import type { SkeletonProps } from './Skeleton.types';

export function Skeleton({
  width = '100%',
  height = 16,
  radius = 'md',
  className,
}: SkeletonProps) {
  return (
    <div
      className={clsx(root({ radius }), className)}
      style={{ width, height }}
    />
  );
}
