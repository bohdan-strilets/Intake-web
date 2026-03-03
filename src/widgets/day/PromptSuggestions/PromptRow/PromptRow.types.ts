export type PromptRowProps = {
  id: string;
  text: string;
  isFavorite: boolean;
  onSelect: (text: string) => void;
  onToggleFavorite: (id: string) => void;
  onDelete: (id: string) => void;
};
