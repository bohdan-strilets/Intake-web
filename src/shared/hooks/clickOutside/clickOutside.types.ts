export type AnyEvent = MouseEvent | TouchEvent;

export type UseClickOutsideOptions = {
  /** Selectors for elements that are treated as "inside" (e.g. portaled dropdowns). */
  ignoreSelectors?: string[];
};
