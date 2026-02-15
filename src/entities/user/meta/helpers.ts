import { PasswordConstraints } from './passwordConstraints';

export const UserFieldHelpers = {
  password: `Min. ${PasswordConstraints.password.min} chars, letter and number`,
  age: 'Used to calculate daily calorie needs',
  height: 'Enter your height in centimeters',
  weight: 'Enter your current body weight',
  targetWeight: 'Enter your target body weight',
  goalDelta: 'Fine-tune your daily calorie target',
  activityLevel: 'Affects your daily calorie recommendation',
} as const;
