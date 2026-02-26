import { useRouterState } from '@tanstack/react-router';
import { AnimatePresence, motion } from 'framer-motion';

import { page, slowTransition } from '@shared/motion';

import type { PageTransitionProps } from './PageTransition.types';

export const PageTransition = ({ children }: PageTransitionProps) => {
  const routeId = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeId}
        variants={page}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={slowTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
