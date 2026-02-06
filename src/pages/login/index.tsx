import { useMatch, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

import { loginRoute } from '@app/router';

import { notify } from '@shared/lib/notify';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { search } = useMatch({ from: loginRoute.id });

  const wasRegistered = search.registered === '1';

  useEffect(() => {
    if (!wasRegistered) return;

    notify.success('Account created. Please log in.');

    navigate({ to: loginRoute.id, search: {}, replace: true });
  }, [navigate, wasRegistered]);

  return <div>Login form</div>;
};
