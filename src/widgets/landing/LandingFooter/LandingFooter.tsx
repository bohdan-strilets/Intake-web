import { Link, useNavigate } from '@tanstack/react-router';
import { motion } from 'framer-motion';

import { useTranslation } from '@shared/i18n';
import { ROUTES } from '@shared/routes';
import { Logo } from '@shared/ui/brand/Logo';
import { Container } from '@shared/ui/layout/Container';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { fadeUpInView } from '../motion';

import { links, root } from './LandingFooter.css';

export const LandingFooter = () => {
  const { t } = useTranslation('landing');
  const { t: tAuth } = useTranslation('auth');
  const navigate = useNavigate();

  return (
    <motion.footer className={root} {...fadeUpInView}>
      <Container padding="md">
        <Stack gap="md" align="center">
          <Logo size="md" />
          <Paragraph size="sm" tone="muted">
            {t('footer.tagline')}
          </Paragraph>
          <div className={links}>
            <Link
              to={ROUTES.auth.register}
              style={{
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              {tAuth('actions.createAccount')}
            </Link>
            <button
              type="button"
              onClick={() => navigate({ to: ROUTES.auth.login })}
              style={{
                background: 'none',
                border: 'none',
                font: 'inherit',
                cursor: 'pointer',
                color: 'inherit',
                padding: 0,
                fontWeight: 500,
              }}
            >
              {tAuth('actions.logIn')}
            </button>
          </div>
        </Stack>
      </Container>
    </motion.footer>
  );
};
