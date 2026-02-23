import { useEffect, useRef } from 'react';

import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

import { container } from './Modal.css';
import type { ModalProps } from './Modal.types';

export const Modal = ({
  open,
  onClose,
  children,
  variant = 'sheet',
}: ModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <Portal>
      <Overlay onClick={onClose}>
        <div
          ref={containerRef}
          className={container({ variant })}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </Overlay>
    </Portal>
  );
};
