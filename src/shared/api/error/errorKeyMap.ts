import type { ErrorCode } from './errorCodes';

export const errorKeyMap = {
  EMAIL_ALREADY_EXISTS: 'errors.emailAlreadyExists',
  INVALID_CREDENTIALS: 'errors.invalidCredentials',
  INVALID_CURRENT_PASSWORD: 'errors.invalidCurrentPassword',
  NEW_PASSWORD_MUST_BE_DIFFERENT: 'errors.newPasswordMustBeDifferent',
  UNAUTHORIZED: 'errors.unauthorized',

  INVALID_SESSION: 'errors.invalidSession',
  ACCOUNT_DELETED: 'errors.accountDeleted',

  USER_NOT_FOUND: 'errors.userNotFound',

  FOOD_NOT_FOUND: 'errors.foodNotFound',
  FOOD_BAD_REQUEST: 'errors.foodBadRequest',
  AI_PARSE_FAILED: 'errors.aiParseFailed',

  VALIDATION_ERROR: 'errors.validation',
  SERVER_ERROR: 'errors.server',
  NETWORK_ERROR: 'errors.connection',
} as const satisfies Record<ErrorCode, string>;
