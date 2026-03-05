import { useEffect } from 'react';

import type { AnyEvent, UseClickOutsideOptions } from './clickOutside.types';

export const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: (event: AnyEvent) => void,
  enabled = true,
  options?: UseClickOutsideOptions,
) => {
  const { ignoreSelectors } = options ?? {};

  useEffect(() => {
    if (!enabled) return;

    const listener = (event: AnyEvent) => {
      const element = ref.current;

      if (!element) return;
      if (element.contains(event.target as Node)) return;

      if (ignoreSelectors?.length) {
        const target = event.target as Element;
        if (target?.closest && ignoreSelectors.some((sel) => target.closest(sel))) return;
      }

      handler(event);
    };

    document.addEventListener('click', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, enabled, ignoreSelectors]);
};
