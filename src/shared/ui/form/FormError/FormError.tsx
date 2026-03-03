import { AnimatePresence, motion } from 'framer-motion';

import { fadeTransition } from '@shared/motion';

import { root } from './FormError.css';
import type { FormErrorProps } from './FormError.types';

export const FormError = ({ children, id }: FormErrorProps) => {
  return (
    <AnimatePresence mode="wait">
      {children ? (
        <motion.div
          key="root-error"
          id={id}
          role="alert"
          aria-live="assertive"
          className={root}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={fadeTransition}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
