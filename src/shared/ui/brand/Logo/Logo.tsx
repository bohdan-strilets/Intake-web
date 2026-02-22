import { clsx } from 'clsx';

import { root } from './Logo.css';
import type { LogoProps } from './Logo.types';

export function Logo({ size, className }: LogoProps) {
  return (
    <img
      src="/logo/logo.webp"
      alt="Company Logo"
      title="Intake"
      className={clsx(root({ size }), className)}
      draggable={false}
    />
  );
}
