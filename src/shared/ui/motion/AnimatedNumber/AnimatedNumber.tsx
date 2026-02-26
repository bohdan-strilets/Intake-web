import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { numberChange } from '@shared/motion';

import { root } from './AnimatedNumber.css';
import type { AnimatedNumberProps } from './AnimatedNumber.types';

export const AnimatedNumber = ({ value }: AnimatedNumberProps) => {
  const controls = useAnimation();

  const isFirstRender = useRef(true);
  const previousValue = useRef(value);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      previousValue.current = value;
      return;
    }

    if (previousValue.current !== value) {
      controls.set('initial');
      controls.start('animate');
      previousValue.current = value;
    }
  }, [value, controls]);

  return (
    <motion.span
      className={root}
      variants={numberChange}
      animate={controls}
      initial={false}
    >
      {value}
    </motion.span>
  );
};
