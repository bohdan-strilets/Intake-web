import { useMatch, useNavigate } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';

import { verifyEmailRoute } from '@app/router/routes/auth';

import { useVerifyEmailMutation } from '@features/auth/verifyEmail';

import { ApiError, errorKeyMap } from '@shared/api/error';
import { useTranslation } from '@shared/i18n';
import { ROUTES } from '@shared/routes';
import { Button } from '@shared/ui/controls/Button';
import { TextLink } from '@shared/ui/controls/TextLink';
import { Card } from '@shared/ui/layout/Card';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

type Status = 'idle' | 'loading' | 'success' | 'error';

export const VerifyEmailPage = () => {
  const { t } = useTranslation('auth');
  const { t: tCommon } = useTranslation('common');

  const navigate = useNavigate();
  const { search } = useMatch({ from: verifyEmailRoute.id });

  const token = typeof search.token === 'string' ? search.token : '';
  const [status, setStatus] = useState<Status>(token ? 'loading' : 'idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const verifiedRef = useRef(false);

  const { mutateAsync } = useVerifyEmailMutation();

  useEffect(() => {
    if (!token) {
      navigate({ to: ROUTES.auth.login, replace: true });
      return;
    }

    if (verifiedRef.current) return;
    verifiedRef.current = true;

    let cancelled = false;

    const verify = async () => {
      try {
        await mutateAsync({ token });
        if (!cancelled) setStatus('success');
      } catch (error: unknown) {
        if (cancelled) return;
        if (
          error instanceof ApiError &&
          error.code === 'INVALID_VERIFICATION_TOKEN'
        ) {
          setErrorMessage(t(errorKeyMap.INVALID_VERIFICATION_TOKEN));
        } else if (!(error instanceof ApiError)) {
          setErrorMessage(tCommon(errorKeyMap.NETWORK_ERROR));
        } else {
          setErrorMessage(tCommon(errorKeyMap.SERVER_ERROR));
        }
        setStatus('error');
      }
    };

    verify();
    return () => {
      cancelled = true;
    };
  }, [token, mutateAsync, t, tCommon, navigate]);

  if (!token) {
    return null;
  }

  if (status === 'loading') {
    return (
      <Card gap="xl" shadow="sm">
        <Title level={1} size="lg">
          {t('verification.title')}
        </Title>
        <Paragraph>{t('verification.verifying')}</Paragraph>
      </Card>
    );
  }

  if (status === 'success') {
    return (
      <Card gap="xl" shadow="sm">
        <Title level={1} size="lg">
          {t('verification.title')}
        </Title>
        <Paragraph>{t('verification.success')}</Paragraph>
        <Button
          type="button"
          fullWidth
          onClick={() => navigate({ to: ROUTES.auth.login })}
        >
          {t('actions.logIn')}
        </Button>
      </Card>
    );
  }

  if (status === 'error') {
    return (
      <Card gap="xl" shadow="sm">
        <Title level={1} size="lg">
          {t('verification.title')}
        </Title>
        <Paragraph>{errorMessage}</Paragraph>
        <TextLink to={ROUTES.auth.login}>
          {t('actions.back')} {t('titles.logIn')}
        </TextLink>
      </Card>
    );
  }

  return null;
};
