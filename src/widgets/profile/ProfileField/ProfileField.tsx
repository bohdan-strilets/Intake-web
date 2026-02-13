import { Inline } from '@shared/ui/layout/Inline';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { ProfileFieldProps } from './ProfileField.types';

export const ProfileField = ({ label, value }: ProfileFieldProps) => {
  return (
    <Inline justify="between" gap="xs">
      <Paragraph tone="muted">{label}:</Paragraph>
      <Paragraph weight="medium">{value}</Paragraph>
    </Inline>
  );
};
