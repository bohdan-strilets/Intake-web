import { useRouterState } from '@tanstack/react-router';
import { AnimatePresence, motion } from 'framer-motion';

import { page, screenTransition } from '@shared/motion';

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
        transition={screenTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
