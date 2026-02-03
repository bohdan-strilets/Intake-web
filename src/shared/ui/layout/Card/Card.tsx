import { Container } from '../Container';
import { Stack } from '../Stack';
import { Surface } from '../Surface';

import type { CardProps } from './Card.types';

export const Card = ({
  children,
  gap = 'md',
  padding = 'md',
  className,
  ...surfaceProps
}: CardProps) => {
  return (
    <Surface {...surfaceProps} className={className}>
      <Container padding={padding}>
        <Stack gap={gap}>{children}</Stack>
      </Container>
    </Surface>
  );
};
