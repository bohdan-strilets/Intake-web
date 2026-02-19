import { useEffect } from 'react';

import type { AnyEvent } from './clickOutside.types';

export const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: (event: AnyEvent) => void,
  enabled = true,
) => {
  useEffect(() => {
    if (!enabled) return;

    const listener = (event: AnyEvent) => {
      const element = ref.current;

      if (!element) return;
      if (element.contains(event.target as Node)) return;

      handler(event);
    };

    document.addEventListener('click', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, enabled]);
};
