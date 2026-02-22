import { Icon } from '@shared/ui/controls/Icon';
import { Inline } from '@shared/ui/layout/Inline';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { InfoRowProps } from './InfoRow.types';

export const InfoRow = ({ label, value, onClick, icon }: InfoRowProps) => {
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
