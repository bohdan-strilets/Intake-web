import clsx from 'clsx';

import { Icon } from '../Icon';

import { root } from './IconBadge.css';
import type { IconBadgeProps } from './IconBadge.types';

export const IconBadge = ({
  name,
  color,
  background,
  size,
  className,
}: IconBadgeProps) => {
  return (
    <div className={clsx(root({ size, background }), className)}>
      <Icon name={name} color={color} size={size} />
    </div>
  );
};
