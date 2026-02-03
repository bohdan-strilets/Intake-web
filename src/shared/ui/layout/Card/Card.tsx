import { Container } from '../Container';
import { Stack } from '../Stack';
import { Surface } from '../Surface';

import type { CardProps } from './Card.types';

export const Card = ({
  children,
  gap = 'md',
  paddingInline = 'md',
  className,
  ...surfaceProps
}: CardProps) => {
  return (
    <Surface {...surfaceProps} className={className}>
      <Container paddingInline={paddingInline}>
        <Stack gap={gap}>{children}</Stack>
      </Container>
    </Surface>
  );
};
