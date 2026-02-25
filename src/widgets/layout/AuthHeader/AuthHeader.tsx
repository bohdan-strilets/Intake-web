import { Logo } from '@shared/ui/brand/Logo';
import { Container } from '@shared/ui/layout/Container';
import { Inline } from '@shared/ui/layout/Inline';

export const AuthHeader = () => {
  return (
    <Container>
      <Inline justify="between">
        <Logo size="md" />
      </Inline>
    </Container>
  );
};
