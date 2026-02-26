import { motion } from 'framer-motion';

import { backdrop } from '@shared/motion';

import { root } from './Overlay.css';
import type { OverlayProps } from './Overlay.types';

export const Overlay = ({ children, onClick }: OverlayProps) => {
  return (
    <motion.div {...backdrop} onClick={onClick} className={root}>
      {children}
    </motion.div>
  );
};
