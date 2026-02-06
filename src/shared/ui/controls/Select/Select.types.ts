import type { RecipeVariants } from '@vanilla-extract/recipes';

import type { trigger } from './Select.css';

export type SelectOption = {
  value: string;
  label: string;
  isDisabled?: boolean;
};

export type SelectVariants = RecipeVariants<typeof trigger>;

export type SelectProps = SelectVariants & {
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;

  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};
