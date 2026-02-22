import { Icon } from '@shared/ui/controls/Icon';
import { Spinner } from '@shared/ui/feedback/Spinner';
import { Inline } from '@shared/ui/layout/Inline';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { OptionItemProps } from './OptionItem.types';

export const OptionItem = ({
  onClick,
  label,
  selected,
  iconName,
  disabled,
  loading,
}: OptionItemProps) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled || loading}>
      <Inline align="center" justify="between">
        <Inline gap="lg" align="center">
          {iconName && <Icon name={iconName} size="lg" />}
          <Paragraph>{label}</Paragraph>
        </Inline>

        {selected && (
          <Inline gap="xs">
            {loading && <Spinner size="sm" />}
            <Icon name="check" color="accentPrimary" />
          </Inline>
        )}
      </Inline>
    </button>
  );
};
