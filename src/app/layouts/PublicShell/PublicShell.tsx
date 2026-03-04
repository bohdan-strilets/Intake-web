import { Link } from '@tanstack/react-router';

import { AppContainer } from '@app/layouts/AppContainer';

import { ROUTES } from '@shared/routes';
import { Logo } from '@shared/ui/brand/Logo';
import { Inline } from '@shared/ui/layout/Inline';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { useTranslation } from '@shared/i18n';

import type { PublicShellProps } from './PublicShell.types';

export const PublicShell = ({ children }: PublicShellProps) => {
  const { t } = useTranslation('auth');

  return (
    <AppContainer>
      <Stack as="header" align="center" gap="none">
        <Spacer size="lg" />
        <Inline
          justify="center"
          align="center"
          style={{
            position: 'relative',
            width: '100%',
            paddingLeft: 24,
            paddingRight: 24,
            boxSizing: 'border-box',
          }}
        >
          <Link to={ROUTES.public.home} aria-label="Intake">
            <Logo size="md" />
          </Link>
          <Link
            to={ROUTES.auth.login}
            style={{
              position: 'absolute',
              right: 24,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Paragraph size="sm" weight="medium" tone="muted">
              {t('actions.logIn')}
            </Paragraph>
          </Link>
        </Inline>
        <Spacer size="xl" />
      </Stack>

      <main>{children}</main>
    </AppContainer>
  );
};
