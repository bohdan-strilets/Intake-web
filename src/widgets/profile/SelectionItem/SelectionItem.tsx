import { Icon } from '@shared/ui/controls/Icon';
import { Inline } from '@shared/ui/layout/Inline';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { SelectionItemProps } from './SelectionItem.types';

export const SelectionItem = ({
  onClick,
  label,
  selected,
  iconName,
}: SelectionItemProps) => {
  return (
    <button type="button" onClick={onClick}>
      <Inline align="center" justify="between">
        <Inline gap="lg" align="center">
          {iconName && <Icon name={iconName} size="lg" />}
          <Paragraph>{label}</Paragraph>
        </Inline>

        {selected && <Icon name="check" color="accentPrimary" />}
      </Inline>
    </button>
  );
};
