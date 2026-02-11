export const FOOD_ICON = {
  Meat: 'meat',
  Fish: 'fish',
  Egg: 'egg',
  Dairy: 'dairy',
  Protein: 'protein',

  Vegetable: 'vegetable',
  Fruit: 'fruit',
  Legume: 'legume',
  Nut: 'nut',

  Grain: 'grain',

  Sauce: 'sauce',
  Sweet: 'sweet',
  Snack: 'snack',
  FastFood: 'fast_food',

  Drink: 'drink',

  MixedDish: 'mixed_dish',

  Other: 'other',
} as const;

export type FoodIcon = (typeof FOOD_ICON)[keyof typeof FOOD_ICON];
