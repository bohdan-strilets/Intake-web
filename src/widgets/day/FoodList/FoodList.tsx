import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { FoodItem } from '@widgets/day/FoodItem';

import {
  DAY_DETAILS_SORT_FIELDS,
  DAY_DETAILS_SORT_ORDERS,
  type DayDetailsSortField,
  type DayDetailsSortOrder,
} from '@entities/day';

import { useTranslation } from '@shared/i18n';
import { fade } from '@shared/motion';
import { gradients } from '@shared/styles/gradients.css';
import { Icon } from '@shared/ui/controls/Icon';
import { IconButton } from '@shared/ui/controls/IconButton';
import { Select } from '@shared/ui/controls/Select';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

import {
  filterBlock,
  filterSortLayout,
  sortRow,
  sortSelectWrap,
} from './FoodList.css';
import type { FoodListProps } from './FoodList.types';

const filtersTransition = { duration: 0.25, ease: 'easeInOut' as const };

export const FoodList = ({
  foods,
  date,
  sortBy,
  sortOrder,
  search,
  isFetching = false,
  onSortByChange,
  onSortOrderChange,
  onSearchChange,
}: FoodListProps) => {
  const { t: tDay } = useTranslation('day');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const isEmpty = foods?.length === 0;
  const showFilterButton = !isEmpty;

  const sortByOptions: Array<{
    value: DayDetailsSortField | null;
    label: string;
  }> = [
    { value: null, label: tDay('sort.label') },
    ...DAY_DETAILS_SORT_FIELDS.map((field) => ({
      value: field,
      label: tDay(`sort.${field}`),
    })),
  ];

  const sortOrderOptions: Array<{
    value: DayDetailsSortOrder | null;
    label: string;
  }> = [
    { value: null, label: tDay('sort.order') },
    ...DAY_DETAILS_SORT_ORDERS.map((order) => ({
      value: order,
      label: tDay(`sort.${order}`),
    })),
  ];

  return (
    <Card
      gap="sm"
      shadow="sm"
      className={isEmpty ? gradients.emptyState : undefined}
    >
      <Stack gap="sm">
        <Inline gap="sm" justify="between" align="center">
          <Title level={2}>{tDay('entities.food')}</Title>
          {showFilterButton && (
            <IconButton
              icon="funnel"
              variant="ghost"
              size="sm"
              iconColor="muted"
              iconSize="sm"
              aria-label={tDay('filter.toggle')}
              aria-expanded={isFiltersOpen}
              onClick={() => setIsFiltersOpen((prev) => !prev)}
            />
          )}
        </Inline>

        <AnimatePresence initial={false}>
          {showFilterButton && isFiltersOpen && (
            <motion.div
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={{ maxHeight: 400, opacity: 1 }}
              exit={{ maxHeight: 0, opacity: 0 }}
              transition={filtersTransition}
              style={{ overflow: 'hidden' }}
            >
              <div className={filterSortLayout}>
                <Inline gap="sm" align="center" className={filterBlock}>
                  <TextInput
                    type="search"
                    placeholder={tDay('filter.searchPlaceholder')}
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    size="sm"
                    aria-label={tDay('filter.searchPlaceholder')}
                  />
                </Inline>
                <div className={sortRow}>
                  <div className={sortSelectWrap}>
                    <Select<DayDetailsSortField | null>
                      placeholder={
                        <Icon
                          name="arrowDownWideNarrow"
                          color="muted"
                          size="sm"
                        />
                      }
                      value={sortBy ?? null}
                      onChange={(v) =>
                        onSortByChange(v === null ? undefined : v)
                      }
                      options={sortByOptions}
                      size="sm"
                    />
                  </div>
                  <div className={sortSelectWrap}>
                    <Select<DayDetailsSortOrder | null>
                      placeholder={
                        <Icon
                          name="arrowDownWideNarrow"
                          color="muted"
                          size="sm"
                        />
                      }
                      value={sortOrder ?? null}
                      onChange={(v) =>
                        onSortOrderChange(v === null ? undefined : v)
                      }
                      options={sortOrderOptions}
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Stack>

      <AnimatePresence mode="wait" initial={false}>
        {isEmpty ? (
          <motion.div
            key="empty"
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ opacity: isFetching ? 0.6 : 1 }}
          >
            <Paragraph tone="muted" size="sm">
              {tDay('states.empty')}
            </Paragraph>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ opacity: isFetching ? 0.6 : 1 }}
          >
            <Stack as="ul" gap="sm" aria-live="polite">
              <AnimatePresence initial={false}>
                {foods.map((food) => (
                  <FoodItem key={food.id} {...food} date={date} />
                ))}
              </AnimatePresence>
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
