import { useEffect, useMemo, useState } from 'react';

import { getMonthMatrix } from '@shared/lib/calendar';
import { formatDate } from '@shared/lib/date';

import type { UseDatePickerParams } from '../types';

const TODAY = new Date();

export const useDatePicker = ({
  value,
  onChange,
  handleClose,
}: UseDatePickerParams) => {
  const selectedParts = useMemo(() => {
    if (!value) return null;

    const [year, month, day] = value.split('-').map(Number);
    return { year, month: month - 1, day };
  }, [value]);

  const [viewYear, setViewYear] = useState(
    selectedParts?.year ?? TODAY.getFullYear(),
  );

  const [viewMonth, setViewMonth] = useState(
    selectedParts?.month ?? TODAY.getMonth(),
  );

  useEffect(() => {
    if (!selectedParts) return;

    setViewYear(selectedParts.year);
    setViewMonth(selectedParts.month);
  }, [selectedParts]);

  const matrix = useMemo(
    () => getMonthMatrix(viewYear, viewMonth),
    [viewYear, viewMonth],
  );

  const selectDay = (day: number) => {
    const date = formatDate(new Date(viewYear, viewMonth, day));

    onChange?.(date);
    handleClose();
  };

  const isSelected = (day?: number | null) => {
    if (!selectedParts || !day) return false;

    return (
      selectedParts.year === viewYear &&
      selectedParts.month === viewMonth &&
      selectedParts.day === day
    );
  };

  return {
    viewYear,
    viewMonth,
    setViewYear,
    setViewMonth,
    matrix,
    selectDay,
    isSelected,
  };
};
