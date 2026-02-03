import type { ReactNode } from 'react';

import type { ContainerProps } from '../Container';
import type { StackProps } from '../Stack';
import type { SurfaceProps } from '../Surface';

export type Props = {
  children: ReactNode;
  padding?: ContainerProps['paddingInline'];
  gap?: StackProps['gap'];
  className?: string;
};

export type CardProps = Props & Omit<SurfaceProps, 'children'>;
