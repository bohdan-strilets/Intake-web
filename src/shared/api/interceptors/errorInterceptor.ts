import type { AxiosError, AxiosInstance } from 'axios';

import { ApiError, ERROR_CODES } from '../error';
import type { ErrorResponse } from '../types';

export function setupErrorInterceptor(api: AxiosInstance) {
  api.interceptors.response.use(
    (res) => res,
    (error: AxiosError<ErrorResponse>) => {
      if (!error.response) throw new ApiError(ERROR_CODES.SERVER_ERROR);

      const code = error.response.data?.code ?? ERROR_CODES.SERVER_ERROR;

      throw new ApiError(code, error.response.status);
    },
  );
}
