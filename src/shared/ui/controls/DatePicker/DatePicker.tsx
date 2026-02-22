import { useRef, useState } from 'react';

import { useClickOutside } from '@shared/hooks/clickOutside';
import { useTranslation } from '@shared/i18n';
import { formatDisplayDate } from '@shared/lib/date';
import { Card } from '@shared/ui/layout/Card';
import { Grid } from '@shared/ui/layout/Grid';
import { Inline } from '@shared/ui/layout/Inline';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Select } from '../Select';

import { cellBtn, picker, root, select, trigger } from './DatePicker.css';
import { useDatePicker } from './model';
import { monthOptions, yearOptions } from './options';
import type { DatePickerProps } from './types';

export const DatePicker = ({
  value,
  onChange,
  onBlur,
  id,
  error,
  size,
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { t: tCommon } = useTranslation('common');
  const { t: tCalendar } = useTranslation('calendar');

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(containerRef, handleClose, isOpen);

  const {
    viewYear,
    viewMonth,
    setViewYear,
    setViewMonth,
    matrix,
    selectDay,
    isSelected,
  } = useDatePicker({ value, onChange, handleClose });
  return (
    <div className={root} ref={containerRef}>
      <button
        id={id}
        type="button"
        onClick={handleToggle}
        onBlur={onBlur}
        className={trigger({ error, size })}
      >
        <Inline justify="between">
          {value
            ? formatDisplayDate(value, 'en-US', true)
            : tCommon('actions.selectDate')}
          <Icon name="calendar" size="md" color="muted" />
        </Inline>
      </button>

      {isOpen && (
        <Card gap="lg" shadow="lg" className={picker}>
          <Inline justify="between" gap="sm">
            <Select
              options={monthOptions}
              value={String(viewMonth)}
              onChange={(month) => setViewMonth(Number(month))}
              placeholder={tCalendar('range.month')}
              className={select}
            />
            <Select
              options={yearOptions}
              value={String(viewYear)}
              onChange={(year) => setViewYear(Number(year))}
              placeholder={tCalendar('range.year')}
              className={select}
            />
          </Inline>

          <Grid columns={7} gap="sm">
            {matrix.flat().map((cell, index) => (
              <Button
                key={index}
                variant="ghost"
                disabled={!cell.dayNumber}
                className={cellBtn({ selected: isSelected(cell.dayNumber) })}
                onClick={() => cell.dayNumber && selectDay(cell.dayNumber)}
              >
                {cell.dayNumber}
              </Button>
            ))}
          </Grid>
        </Card>
      )}
    </div>
  );
};
