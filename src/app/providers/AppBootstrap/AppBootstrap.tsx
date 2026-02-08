import { useEffect, useState } from 'react';

import { bootstrapAuth } from '@features/auth/bootstrap/model';

import type { AppBootstrapProps } from './AppBootstrap.type';

export const AppBootstrap = ({ children }: AppBootstrapProps) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const bootstrap = async () => {
      await bootstrapAuth();
      setReady(true);
    };

    bootstrap();
  }, []);

  if (!ready) {
    return null;
  }

  return <>{children}</>;
};
