export type UseKeyboardNavigationParams = {
  isOpen: boolean;
  itemsLength: number;
  onSelect: (index: number) => void;
  onClose: () => void;
  initialIndex?: number;
};
