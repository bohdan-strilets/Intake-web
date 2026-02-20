import { Icon } from '@shared/ui/controls/Icon';
import { Inline } from '@shared/ui/layout/Inline';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { ProfileFieldProps } from './ProfileField.types';

export const ProfileField = ({
  label,
  value,
  onClick,
  icon,
}: ProfileFieldProps) => {
  const isInteractive = Boolean(onClick);
  const Component = isInteractive ? 'button' : 'div';

  return (
    <Inline as={Component} justify="between" gap="xs" onClick={onClick}>
      {icon && <Icon name={icon} />}
      {label && <Paragraph tone="muted">{label}:</Paragraph>}
      {value && <Paragraph weight="medium">{value}</Paragraph>}
    </Inline>
  );
};
