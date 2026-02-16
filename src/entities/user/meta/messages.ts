import { PasswordConstraints } from './passwordConstraints';
import { UserConstraints } from './userConstraints';

export const UserValidationMessages = {
  common: {
    integer: 'Value must be an integer',
    type: 'Value must be a number',
    required: 'This field is required',
    decimal: 'Only one decimal place is allowed',
    immutable: 'Field cannot be removed',
  },

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
    match: 'New password and confirmation do not match',
  },

  age: {
    min: `Age must be at least ${UserConstraints.age.min}`,
    max: `Age must be at most ${UserConstraints.age.max}`,
  },

  height: {
    min: `Height must be at least ${UserConstraints.height.min} cm`,
    max: `Height must be at most ${UserConstraints.height.max} cm`,
  },

  weight: {
    min: `Weight must be at least ${UserConstraints.weight.min} kg`,
    max: `Weight must be at most ${UserConstraints.weight.max} kg`,
  },

  targetWeight: {
    min: `Target weight must be at least ${UserConstraints.targetWeight.min} kg`,
    max: `Target weight must be at most ${UserConstraints.targetWeight.max} kg`,
  },

  goalDelta: {
    min: `Goal delta must be at least ${UserConstraints.goalDelta.min}`,
    max: `Goal delta must be at most ${UserConstraints.goalDelta.max}`,
  },
} as const;
