import type { RecipeVariants } from '@vanilla-extract/recipes';

import type { trigger } from './Select.css';

export type SelectOption<T extends string | number | null> = {
  value: T;
  label: string;
  isDisabled?: boolean;
};

export type SelectVariants = RecipeVariants<typeof trigger>;

export type SelectProps<T extends string | number | null> = SelectVariants & {
  value?: T;
  onChange?: (value: T) => void;
  onBlur?: () => void;

  options: SelectOption<T>[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};
