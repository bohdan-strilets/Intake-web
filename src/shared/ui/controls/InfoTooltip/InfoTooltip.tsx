import { useCallback, useEffect, useRef, useState } from 'react';

import { root, tooltip, tooltipInner, trigger } from './InfoTooltip.css';
import type { InfoTooltipProps } from './InfoTooltip.types';

export function InfoTooltip({
  content,
  size = 'sm',
  position = 'bottom',
}: InfoTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const rootRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const open = useCallback(() => {
    setIsClosing(false);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsClosing(true);
    const t = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 120);
    return () => clearTimeout(t);
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) close();
    else open();
  }, [isOpen, open, close]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (rootRef.current?.contains(target)) return;
      if (tooltipRef.current?.contains(target)) return;
      close();
    };

    document.addEventListener('pointerdown', handlePointerDown, {
      capture: true,
    });
    return () =>
      document.removeEventListener('pointerdown', handlePointerDown, {
        capture: true,
      });
  }, [isOpen, close]);

  return (
    <span className={root} ref={rootRef}>
      <button
        type="button"
        className={trigger({ size })}
        onClick={toggle}
        onPointerDown={(e) => e.stopPropagation()}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Show hint"
      >
        ?
      </button>
      {isOpen && content && (
        <div
          ref={tooltipRef}
          role="tooltip"
          className={tooltip({ position, closing: isClosing })}
        >
          <div className={tooltipInner}>{content}</div>
        </div>
      )}
    </span>
  );
}
