import type {
  DayDetailsSortField,
  DayDetailsSortOrder,
} from '@entities/day';
import type { FoodEntity } from '@entities/food';

export type FoodListProps = {
  foods: FoodEntity[];
  date: string;
  sortBy?: DayDetailsSortField;
  sortOrder?: DayDetailsSortOrder;
  search: string;
  isFetching?: boolean;
  onSortByChange: (value: DayDetailsSortField | undefined) => void;
  onSortOrderChange: (value: DayDetailsSortOrder | undefined) => void;
  onSearchChange: (value: string) => void;
};
