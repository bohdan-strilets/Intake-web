import { motion } from 'framer-motion';

import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { bar, track } from './Progress.css';
import type { ProgressProps } from './Progress.types';

export const Progress = ({
  value,
  target,
  unit = '',
  label,
  valueSize = 'sm',
  valueWeight,
}: ProgressProps) => {
  const progress = target > 0 ? Math.min(value / target, 1) : 0;

  const tone =
    value > target ? 'over' : value === target ? 'success' : 'normal';

  return (
    <Stack gap="xs">
      {label && (
        <Paragraph size="sm" weight="medium">
          {label}
        </Paragraph>
      )}

      <div className={track}>
        <motion.div
          className={bar({ tone })}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress }}
        />
      </div>

      <Paragraph
        size={valueSize}
        weight={valueWeight}
        tone="muted"
      >
        {value} {unit}
      </Paragraph>
    </Stack>
  );
};
