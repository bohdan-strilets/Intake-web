import { UserProfile } from '@widgets/layout/UserProfile';
import { ThemeToggle } from '@widgets/theme/ThemeToggle';

import { Logo } from '@shared/ui/brand/Logo';
import { Container } from '@shared/ui/layout/Container';
import { Inline } from '@shared/ui/layout/Inline';

export const AppHeader = () => {
  return (
    <Container>
      <Inline justify="between" align="center">
        <Logo size="md" />
        <Inline gap="md" align="center">
          <ThemeToggle />
          <UserProfile />
        </Inline>
      </Inline>
    </Container>
  );
};
