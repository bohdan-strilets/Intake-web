import { API_ROUTES } from '@shared/api';
import { del } from '@shared/api/http';

export const deleteProfileApi = async () => {
  return await del<void>(API_ROUTES.users.delete);
};
