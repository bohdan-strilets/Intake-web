import { clsx } from 'clsx';

import { root } from './Avatar.css';
import type { AvatarProps } from './Avatar.types';

const getInitial = (name: string): string => {
  const trimmed = name.trim();
  if (!trimmed) return '?';
  return trimmed[0].toUpperCase();
};

export const Avatar = ({ name, size, className, ...rest }: AvatarProps) => {
  const initial = getInitial(name);

  return (
    <span
      className={clsx(root({ size }), className)}
      aria-hidden
      {...rest}
    >
      {initial}
    </span>
  );
};
