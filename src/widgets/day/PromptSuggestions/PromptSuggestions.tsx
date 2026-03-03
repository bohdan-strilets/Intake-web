import { memo, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import type { SavedPromptEntity } from '@entities/savedPrompt';
import {
  useDeletePromptMutation,
  useRecentPrompts,
  useTogglePromptFavorite,
} from '@features/prompts';
import { useTranslation } from '@shared/i18n';
import { useConfirm } from '@shared/lib/confirm';
import { listItem } from '@shared/motion';
import { gradients } from '@shared/styles/gradients.css';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { PromptRow } from './PromptRow';
import type { PromptSuggestionsProps } from './PromptSuggestions.types';

const MAX_ITEMS = 8;

function sortPrompts(prompts: SavedPromptEntity[]): SavedPromptEntity[] {
  return [...prompts].sort((a, b) => {
    if (a.isFavorite !== b.isFavorite) return a.isFavorite ? -1 : 1;
    return (
      new Date(b.lastUsedAt).getTime() - new Date(a.lastUsedAt).getTime()
    );
  });
}

export const PromptSuggestions = memo(function PromptSuggestions({
  onSelect,
}: PromptSuggestionsProps) {
  const { t: tCommon } = useTranslation('common');
  const { t: tDay } = useTranslation('day');
  const { data: prompts = [], isPending } = useRecentPrompts();
  const { mutate: toggleFavorite } = useTogglePromptFavorite();
  const { mutateAsync: deletePrompt } = useDeletePromptMutation();
  const { openConfirm } = useConfirm();

  const sorted = sortPrompts(prompts).slice(0, MAX_ITEMS);
  const handleToggleFavorite = useCallback(
    (id: string) => toggleFavorite(id),
    [toggleFavorite],
  );
  const handleDelete = useCallback(
    (id: string) => {
      openConfirm({
        title: tDay('dialogs.deletePrompt.title'),
        description: tDay('dialogs.deletePrompt.description'),
        confirmText: tCommon('actions.delete'),
        confirmVariant: 'danger',
        onConfirm: async () => await deletePrompt(id),
      });
    },
    [openConfirm, tDay, tCommon, deletePrompt],
  );

  if (isPending) return null;
  if (sorted.length === 0) {
    return (
      <Card gap="xs" shadow="sm" className={gradients.emptyState}>
        <Paragraph tone="muted" size="sm">
          {tDay('states.promptsEmpty')}
        </Paragraph>
      </Card>
    );
  }

  return (
    <Stack as="ul" gap="sm" aria-label="Recent prompts">
      <AnimatePresence initial={false}>
        {sorted.map((prompt) => (
          <motion.li
            key={prompt.id}
            variants={listItem}
            initial="initial"
            animate="animate"
            exit="exit"
            layout="position"
          >
            <PromptRow
              id={prompt.id}
              text={prompt.text}
              isFavorite={prompt.isFavorite}
              onSelect={onSelect}
              onToggleFavorite={handleToggleFavorite}
              onDelete={handleDelete}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </Stack>
  );
});
