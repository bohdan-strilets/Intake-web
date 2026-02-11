import { ThemeToggle } from '@widgets/ThemeToggle';

import { Logo } from '@shared/ui/brand/Logo';
import { Container } from '@shared/ui/layout/Container';
import { Inline } from '@shared/ui/layout/Inline';

export const AppHeader = () => {
  return (
    <Container>
      <Inline justify="between">
        <Logo size="md" />
        <ThemeToggle />
      </Inline>
    </Container>
  );
};
