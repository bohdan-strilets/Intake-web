export const FoodConstraints = {
  text: {
    minLength: 3,
    maxLength: 1000,
  },

  weight: {
    min: 1,
    max: 5000,
  },
} as const;
