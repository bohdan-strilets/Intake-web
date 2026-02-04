import { clsx } from 'clsx';

import { root } from './Icon.css';
import type { IconProps } from './Icon.types';
import { icons } from './icons';

export const Icon = ({
  icon,
  size,
  color,
  decorative = true,
  className,
  ...rest
}: IconProps) => {
  const LucideIcon = icons[icon];

  return (
    <LucideIcon
      {...rest}
      className={clsx(root({ size, color }), className)}
      aria-hidden={decorative || undefined}
      focusable={false}
    />
  );
};
