import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

export type RegisterPushSubscriptionDto = {
  endpoint: string;
  p256dh: string;
  auth: string;
};

type Response = { id: string };

export const registerPushSubscriptionApi = (dto: RegisterPushSubscriptionDto) =>
  post<Response, RegisterPushSubscriptionDto>(
    API_ROUTES.users.pushSubscription,
    dto,
  );
