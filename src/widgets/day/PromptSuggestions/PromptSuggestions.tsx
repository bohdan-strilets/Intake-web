import { AnimatePresence, motion } from 'framer-motion';
import { memo, useCallback, useState } from 'react';

import {
  useDeletePromptMutation,
  useRecentPrompts,
  useTogglePromptFavorite,
} from '@features/prompts';

import type { SavedPromptEntity } from '@entities/savedPrompt';

import { useTranslation } from '@shared/i18n';
import { useConfirm } from '@shared/lib/confirm';
import { listItem } from '@shared/motion';
import { gradients } from '@shared/styles/gradients.css';
import { Button } from '@shared/ui/controls/Button';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { PromptRow } from './PromptRow';
import type { PromptSuggestionsProps } from './PromptSuggestions.types';

const MAX_ITEMS = 8;
const expandTransition = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1] as const,
};

function sortPrompts(prompts: SavedPromptEntity[]): SavedPromptEntity[] {
  return [...prompts].sort((a, b) => {
    if (a.isFavorite !== b.isFavorite) return a.isFavorite ? -1 : 1;
    return new Date(b.lastUsedAt).getTime() - new Date(a.lastUsedAt).getTime();
  });
}

export const PromptSuggestions = memo(function PromptSuggestions({
  onSelect,
}: PromptSuggestionsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
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

  return (
    <Stack gap="sm">
      <Button
        variant="ghostMuted"
        size="sm"
        fullWidth
        onClick={() => setIsExpanded((e) => !e)}
      >
        {isExpanded ? tDay('actions.hidePrompts') : tDay('actions.showPrompts')}
      </Button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: expandTransition,
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: expandTransition,
            }}
            transition={expandTransition}
            style={{ overflow: 'hidden' }}
          >
            {sorted.length === 0 ? (
              <Card gap="xs" shadow="sm" className={gradients.emptyState}>
                <Paragraph tone="muted" size="sm">
                  {tDay('states.promptsEmpty')}
                </Paragraph>
              </Card>
            ) : (
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
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Stack>
  );
});
