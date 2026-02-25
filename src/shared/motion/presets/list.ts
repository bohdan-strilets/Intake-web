export const listContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.04,
    },
  },
} as const;

export const listItem = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
} as const;
