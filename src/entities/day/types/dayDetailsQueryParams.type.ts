export const DAY_DETAILS_SORT_FIELDS = [
  'weight',
  'calories',
  'protein',
  'carbs',
  'fat',
] as const;
export type DayDetailsSortField = (typeof DAY_DETAILS_SORT_FIELDS)[number];

export const DAY_DETAILS_SORT_ORDERS = ['asc', 'desc'] as const;
export type DayDetailsSortOrder = (typeof DAY_DETAILS_SORT_ORDERS)[number];

export type DayDetailsQueryParams = {
  sortBy?: DayDetailsSortField;
  sortOrder?: DayDetailsSortOrder;
  search?: string;
};
