import { PasswordConstraints } from './password-constraints';

export const UserFieldHelpers = {
  password: `Min. ${PasswordConstraints.password.min} chars, letter and number`,
  age: 'Used to calculate daily calorie needs',
  height: 'Enter your height in centimeters',
  weight: 'Enter your current body weight',
} as const;
