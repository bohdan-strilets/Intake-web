import { ThemeToggle } from '@widgets/ThemeToggle';

import { Logo } from '@shared/ui/brand/Logo';
import { Inline } from '@shared/ui/layout/Inline';

export const AppHeader = () => {
  return (
    <Inline justify="between">
      <Logo size="md" />
      <ThemeToggle />
    </Inline>
  );
};
