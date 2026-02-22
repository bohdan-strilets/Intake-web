import type { SelectOption } from '../../Select';

const CURRENT_YEAR = new Date().getFullYear();

export const yearOptions: SelectOption<string>[] = Array.from(
  { length: 100 },
  (_, index) => {
    const year = CURRENT_YEAR - index;

    return {
      value: String(year),
      label: String(year),
    };
  },
);
