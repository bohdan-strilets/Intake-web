import type { ReactNode } from 'react';

import type { ContainerProps } from '../Container';
import type { StackProps } from '../Stack';
import type { SurfaceProps } from '../Surface';

export type Props = {
  children: ReactNode;
  paddingInline?: ContainerProps['paddingInline'];
  gap?: StackProps['gap'];
  className?: string;
};

export type CardProps = Props & Omit<SurfaceProps, 'children'>;
