import { Link } from '@tanstack/react-router';
import clsx from 'clsx';

import { root } from './TextLink.css';
import type { TextLinkProps } from './TextLink.types';

export const TextLink = ({ className, ...props }: TextLinkProps) => {
  return <Link {...props} className={clsx(root, className)} />;
};
