import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import type { PortalProps } from './Portal.types';

export const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById('portal-root');
    setPortalRoot(element);
    setMounted(true);
  }, []);

  if (!mounted || !portalRoot) return null;

  return createPortal(children, portalRoot);
};
