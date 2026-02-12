export const FoodValidationMessages = {
  text: {
    required: 'Please describe what you ate',
    minLength: 'Description is too short',
    maxLength: 'Description is too long',
  },

  weight: {
    required: 'Weight is required',
    min: 'Must be greater than 0',
    max: 'Value is too large',
    integer: 'Must be a whole number',
  },
} as const;
