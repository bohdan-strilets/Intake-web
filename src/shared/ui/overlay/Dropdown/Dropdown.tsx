import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useId, useRef, useState } from 'react';

import { useClickOutside } from '@shared/hooks/clickOutside';
import { useKeyboardNavigation } from '@shared/hooks/keyboardNavigation';
import { scaleIn, tapScale } from '@shared/motion';
import { Icon } from '@shared/ui/controls/Icon';
import { Inline } from '@shared/ui/layout/Inline';

import { container, itemButton, menu, triggerButton } from './Dropdown.css';
import type { DropdownProps } from './Dropdown.types';

export const Dropdown = ({
  trigger,
  items,
  align = 'right',
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const menuId = useId();

  const toggle = () => setIsOpen((state) => !state);
  const close = () => setIsOpen(false);

  useClickOutside(rootRef, close, isOpen);

  const selectByIndex = (index: number) => {
    const item = items[index];
    if (!item || item.disabled) return;

    item.onSelect();
    close();
  };

  const { activeIndex, setActiveIndex, handleKeyDown, reset } =
    useKeyboardNavigation({
      isOpen,
      itemsLength: items.length,
      onSelect: selectByIndex,
      onClose: () => close(),
    });

  useEffect(() => {
    if (isOpen) {
      reset();
      setActiveIndex(0);
    }
  }, [isOpen, reset, setActiveIndex]);

  return (
    <div className={container} ref={rootRef}>
      <button
        type="button"
        onClick={toggle}
        onKeyDown={handleKeyDown}
        className={triggerButton}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-activedescendant={
          isOpen && activeIndex !== -1
            ? `${menuId}-item-${activeIndex}`
            : undefined
        }
      >
        {trigger}
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="dropdown"
            id={menuId}
            role="menu"
            className={menu({ align, transformOrigin: align })}
            initial={false}
            animate="animate"
            exit="exit"
            variants={scaleIn}
          >
            {items.map((item, index) => {
              const itemId = `${menuId}-item-${index}`;

              return (
                <motion.button
                  key={item.id}
                  {...tapScale}
                  id={itemId}
                  type="button"
                  role="menuitem"
                  aria-disabled={item.disabled || undefined}
                  disabled={item.disabled}
                  className={itemButton({
                    danger: item.danger ?? false,
                    disabled: item.disabled ?? false,
                    active: index === activeIndex,
                  })}
                  onClick={() => {
                    if (!item.disabled) {
                      item.onSelect();
                      close();
                    }
                  }}
                  tabIndex={-1}
                >
                  <Inline gap="md" align="center">
                    {item.icon && (
                      <Icon
                        name={item.icon}
                        size="sm"
                        color={item.danger ? 'danger' : 'primary'}
                      />
                    )}
                    {item.label}
                  </Inline>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
