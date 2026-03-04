import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { useKeyboardNavigation } from '@shared/hooks/keyboardNavigation';
import { useTranslation } from '@shared/i18n';
import { quickTransition, rotateChevron, scaleIn } from '@shared/motion';
import { Inline } from '@shared/ui/layout/Inline';

import { Icon } from '../Icon';

import {
  item,
  listPortal,
  optionBtn,
  optionContent,
  optionDescription,
  trigger,
  triggerContent,
  wrapper,
} from './Select.css';
import type { SelectProps } from './Select.types';

export const Select = <T extends string | number | null>({
  placeholder,
  options,
  onChange,
  onBlur,
  value,
  disabled,
  error,
  size,
  className,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [listRect, setListRect] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const { t } = useTranslation('common');

  const selectedIndex = options.findIndex((option) => option.value === value);
  const selectedLabel = options.find((option) => option.value === value)?.label;

  const updateListRect = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setListRect({
      top: rect.bottom + 4,
      left: rect.left,
      width: rect.width,
    });
  }, []);

  const toggle = () => setIsOpen((state) => !state);
  const close = () => {
    setIsOpen(false);
    setListRect(null);
    reset();
    onBlur?.();
  };

  const selectByIndex = (index: number) => {
    onChange?.(options[index].value);
    close();
  };

  const { activeIndex, setActiveIndex, handleKeyDown, reset } =
    useKeyboardNavigation({
      isOpen,
      itemsLength: options.length,
      onSelect: selectByIndex,
      onClose: () => close(),
    });

  useEffect(() => {
    if (isOpen) updateListRect();
  }, [isOpen, updateListRect]);

  useEffect(() => {
    if (!isOpen) return;
    const handleScrollOrResize = () => updateListRect();
    window.addEventListener('scroll', handleScrollOrResize, true);
    window.addEventListener('resize', handleScrollOrResize);
    return () => {
      window.removeEventListener('scroll', handleScrollOrResize, true);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [isOpen, updateListRect]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (rootRef.current?.contains(target)) return;
      if (listRef.current?.contains(target)) return;
      close();
    };
    document.addEventListener('click', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('click', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [isOpen]);

  const handleTrigger = () => {
    toggle();
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
  };

  const getOptionId = (index: number) => `select-option-${index}`;
  const listboxId = 'select-listbox';

  return (
    <div ref={rootRef} className={clsx(wrapper, className)}>
      <button
        ref={triggerRef}
        type="button"
        onClick={handleTrigger}
        onKeyDown={handleKeyDown}
        className={trigger({ size, error })}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-activedescendant={
          isOpen && activeIndex !== null ? getOptionId(activeIndex) : undefined
        }
        aria-controls={listboxId}
      >
        <Inline className={triggerContent} justify="between">
          {selectedLabel || placeholder || t('actions.select')}

          <motion.span
            variants={rotateChevron}
            animate={isOpen ? 'open' : 'closed'}
            transition={quickTransition}
          >
            <Icon name="chevronDown" color="muted" />
          </motion.span>
        </Inline>
      </button>

      {isOpen &&
        listRect &&
        typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence mode="wait">
            <motion.ul
              ref={listRef}
              key="select-list"
              id={listboxId}
              role="listbox"
              className={listPortal}
              style={{
                top: listRect.top,
                left: listRect.left,
                width: listRect.width,
                minWidth: listRect.width,
              }}
              variants={scaleIn}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {options.map((option, index) => {
                const isSelected = option.value === value;
                const isActive = index === activeIndex;

                return (
                  <li
                    key={`${option.value ?? 'null'}-${index}`}
                    id={getOptionId(index)}
                    className={item}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <button
                      type="button"
                      tabIndex={-1}
                      onMouseDown={() => selectByIndex(index)}
                      className={optionBtn({
                        selected: isSelected,
                        active: isActive,
                      })}
                      disabled={option.isDisabled || disabled}
                      title={option.helperText}
                    >
                      <span className={optionContent}>
                        <span>{option.label}</span>
                        {option.description && (
                          <span className={optionDescription}>
                            {option.description}
                          </span>
                        )}
                      </span>
                      {isSelected && (
                        <Icon name="check" color="accentPrimary" />
                      )}
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
};
