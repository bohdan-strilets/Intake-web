import clsx from 'clsx';
import { useRef, useState } from 'react';

import { useClickOutside } from '@shared/hooks/clickOutside';
import { useKeyboardNavigation } from '@shared/hooks/keyboardNavigation';
import { useTranslation } from '@shared/i18n';

import { Icon } from '../Icon';

import { item, list, optionBtn, trigger, wrapper } from './Select.css';
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
  const rootRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation('common');

  const selectedIndex = options.findIndex((option) => option.value === value);
  const selectedLabel = options.find((option) => option.value === value)?.label;

  const toggle = () => setIsOpen((state) => !state);
  const close = () => {
    setIsOpen(false);
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

  useClickOutside(rootRef, close, isOpen);

  const handleTrigger = () => {
    toggle();
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
  };

  const getOptionId = (index: number) => `select-option-${index}`;
  const listboxId = 'select-listbox';

  return (
    <div ref={rootRef} className={clsx(wrapper, className)}>
      <button
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
        {selectedLabel || placeholder || t('actions.select')}
      </button>

      {isOpen && (
        <ul id={listboxId} className={list} role="listbox">
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
                >
                  {option.label}
                  {isSelected && <Icon name="check" color="accentPrimary" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
