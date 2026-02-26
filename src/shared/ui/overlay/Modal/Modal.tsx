import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

import { scaleIn, slideUp, slowTransition } from '@shared/motion';

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

  return (
    <Portal>
      <AnimatePresence mode="wait">
        {open && (
          <Overlay onClick={onClose}>
            <motion.div
              key="modal"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variant === 'sheet' ? slideUp : scaleIn}
              transition={slowTransition}
              className={container({ variant })}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </Overlay>
        )}
      </AnimatePresence>
    </Portal>
  );
};
