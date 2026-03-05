import { Link } from '@tanstack/react-router';

import { AppContainer } from '@app/layouts/AppContainer';

import { ROUTES } from '@shared/routes';
import { Logo } from '@shared/ui/brand/Logo';

import { contentWrap, headerSection, main, root } from './AuthShell.css';
import type { AuthShellProps } from './AuthShell.types';

export const AuthShell = ({ children }: AuthShellProps) => {
  return (
    <div className={root}>
      <AppContainer>
        <header className={headerSection}>
          <Link to={ROUTES.public.home} aria-label="Intake">
            <Logo size="md" />
          </Link>
        </header>

        <main className={main}>
          <div className={contentWrap}>{children}</div>
        </main>
      </AppContainer>
    </div>
  );
};
