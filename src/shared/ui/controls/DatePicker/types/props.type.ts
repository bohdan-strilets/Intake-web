import type { RecipeVariants } from '@vanilla-extract/recipes';

import type { trigger } from '../DatePicker.css';

export type DatePickerVariants = RecipeVariants<typeof trigger>;

export type DatePickerProps = DatePickerVariants & {
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  id?: string;
};
