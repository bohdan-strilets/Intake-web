import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

import { root } from './AnimatedCounter.css';
import type { AnimatedCounterProps } from './AnimatedCounter.types';

export const AnimatedCounter = ({
  value,
  decimals = 0,
  format,
}: AnimatedCounterProps) => {
  const motionValue = useMotionValue(0);

  const spring = useSpring(motionValue, {
    stiffness: 120,
    damping: 20,
    mass: 1,
  });

  const display = useTransform(spring, (latest) => {
    const rounded = Number(latest.toFixed(decimals));
    return format ? format(rounded) : rounded.toString();
  });

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  return <motion.span className={root}>{display}</motion.span>;
};
