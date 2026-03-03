import { memo } from 'react';

import { useTranslation } from '@shared/i18n';
import { Icon } from '@shared/ui/controls/Icon';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Dropdown, type DropdownItem } from '@shared/ui/overlay/Dropdown';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { clsx } from 'clsx';

import { promptText, selectButton, starButton } from './PromptRow.css';
import type { PromptRowProps } from './PromptRow.types';

export const PromptRow = memo(function PromptRow({
  id,
  text,
  isFavorite,
  onSelect,
  onToggleFavorite,
  onDelete,
}: PromptRowProps) {
  const { t: tCommon } = useTranslation('common');

  const handleSelect = () => onSelect(text);
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(id);
  };

  const dropdownItems: DropdownItem[] = [
    {
      id: 'delete',
      label: tCommon('actions.delete'),
      icon: 'trash',
      danger: true,
      onSelect: () => onDelete(id),
    },
  ];

  return (
    <Card tone="primary" shadow="sm" gap="none">
      <Inline justify="between" align="center" gap="sm">
        <button
          type="button"
          onClick={handleSelect}
          className={clsx(selectButton, promptText)}
        >
          <Paragraph weight="medium" size="xs" tone="muted">
            {text}
          </Paragraph>
        </button>
        <Inline gap="xs" align="center">
          <button
            type="button"
            onClick={handleToggle}
            className={starButton}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Icon
              name="star"
              size="sm"
              color={isFavorite ? 'accentPrimary' : 'muted'}
            />
          </button>
          <Dropdown trigger={<Icon name="more" />} items={dropdownItems} />
        </Inline>
      </Inline>
    </Card>
  );
});
