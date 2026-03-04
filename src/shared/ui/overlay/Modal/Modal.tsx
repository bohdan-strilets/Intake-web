import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { breakpoints } from '@shared/styles/tokens/breakpoints.css';
import { fadeUpModal, screenTransition, sheetUp } from '@shared/motion';

import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

import { container } from './Modal.css';
import type { ModalProps } from './Modal.types';

const LAPTOP_MIN_PX = breakpoints.laptop;

export const Modal = ({
  open,
  onClose,
  children,
  variant = 'sheet',
}: ModalProps) => {
  const [isLaptopOrUp, setIsLaptopOrUp] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(`(min-width: ${LAPTOP_MIN_PX}px)`).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${LAPTOP_MIN_PX}px)`);
    const handle = () => setIsLaptopOrUp(mql.matches);
    mql.addEventListener('change', handle);
    return () => mql.removeEventListener('change', handle);
  }, []);

  const effectiveVariant =
    variant === 'sheet' && isLaptopOrUp ? 'centered' : variant;

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
              variants={effectiveVariant === 'sheet' ? sheetUp : fadeUpModal}
              transition={screenTransition}
              className={container({ variant: effectiveVariant })}
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
