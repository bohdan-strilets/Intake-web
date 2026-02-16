import type { ErrorCode } from './errorCodes';

export const errorMessages: Record<ErrorCode, string> = {
  EMAIL_ALREADY_EXISTS: 'Email already registered',
  INVALID_CREDENTIALS: 'Invalid email or password',
  INVALID_CURRENT_PASSWORD: 'Invalid current password',
  NEW_PASSWORD_MUST_BE_DIFFERENT: 'New password must be different',
  UNAUTHORIZED: 'Unauthorized',

  INVALID_SESSION: 'Session expired',
  VALIDATION_ERROR: 'Invalid input data',

  USER_NOT_FOUND: 'User not found',
  ACCOUNT_DELETED:
    'Your account is deactivated. You can restore it by signing in again.',

  FOOD_NOT_FOUND: 'Food entry not found',
  FOOD_BAD_REQUEST: 'Invalid food data',

  AI_PARSE_FAILED: 'Could not analyze food description',

  SERVER_ERROR: 'Something went wrong',
};
