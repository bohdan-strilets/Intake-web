import { MotionConfig } from 'framer-motion';

import { motionDurations, motionEase } from '@shared/motion';

import type { MotionProviderProps } from './MotionProvider.types';

export const MotionProvider = ({ children }: MotionProviderProps) => {
  return (
    <MotionConfig
      transition={{
        duration: motionDurations.normal,
        ease: motionEase.smooth,
      }}
    >
      {children}
    </MotionConfig>
  );
};
