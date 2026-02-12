import { PasswordConstraints } from './passwordConstraints';
import { UserConstraints } from './userConstraints';

export const UserValidationMessages = {
  name: {
    min: `Name must be at least ${UserConstraints.name.minLength} characters`,
    max: `Name must be at most ${UserConstraints.name.maxLength} characters`,
  },

  email: {
    invalid: 'Email must be a valid email address',
  },

  password: {
    min: `Password must be at least ${PasswordConstraints.password.min} characters`,
    max: `Password must be at most ${PasswordConstraints.password.max} characters`,
    letter: 'Password must contain at least one letter',
    digit: 'Password must contain at least one digit',
    required: 'Password is required',
  },

  sex: {
    required: 'Sex must be selected',
  },

  age: {
    integer: 'Age must be an integer',
    min: `Age must be at least ${UserConstraints.age.min}`,
    max: `Age must be at most ${UserConstraints.age.max}`,
    type: 'Age must be a number',
  },

  height: {
    integer: 'Height must be an integer',
    min: `Height must be at least ${UserConstraints.height.min} cm`,
    max: `Height must be at most ${UserConstraints.height.max} cm`,
    type: 'Height must be a number',
  },

  weight: {
    integer: 'Weight must be an integer',
    min: `Weight must be at least ${UserConstraints.weight.min} kg`,
    max: `Weight must be at most ${UserConstraints.weight.max} kg`,
    type: 'Weight must be a number',
  },

  goal: {
    required: 'Goal must be selected',
  },

  activityLevel: {
    required: 'Activity level must be selected',
  },
} as const;
