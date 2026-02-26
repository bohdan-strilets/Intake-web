export const listContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.005,
    },
  },
} as const;

export const listItem = {
  initial: { opacity: 0, y: -6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 6 },
} as const;
