import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { bar, track } from './Progress.css';
import type { ProgressProps } from './Progress.types';

export const Progress = ({
  value,
  target,
  unit = '',
  label,
}: ProgressProps) => {
  const percent = Math.min((value / target) * 100, 100);

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
        <div className={bar({ tone })} style={{ width: `${percent}%` }} />
      </div>

      <Paragraph size="sm" tone="muted">
        {value} {unit}
      </Paragraph>
    </Stack>
  );
};
