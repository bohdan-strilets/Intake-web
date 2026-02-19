import type { DatePickerProps } from './props.type';

export type UseDatePickerParams = Pick<
  DatePickerProps,
  'value' | 'onChange'
> & {
  handleClose: () => void;
};
