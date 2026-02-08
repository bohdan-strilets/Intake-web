import type { ErrorCode } from './errorCodes';

export const errorMessages: Record<ErrorCode, string> = {
  EMAIL_ALREADY_EXISTS: 'Email already registered',
  INVALID_CREDENTIALS: 'Invalid email or password',
  UNAUTHORIZED: 'Unauthorized',

  INVALID_SESSION: 'Session expired',
  VALIDATION_ERROR: 'Invalid input data',

  USER_NOT_FOUND: 'User not found',
  FOOD_NOT_FOUND: 'Food entry not found',

  AI_PARSE_FAILED: 'Could not analyze food description',

  SERVER_ERROR: 'Something went wrong',
};
