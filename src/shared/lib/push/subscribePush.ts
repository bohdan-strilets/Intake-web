import { whenSWRegistered } from './swRegistration';

const withTimeout = <T>(
  promise: Promise<T>,
  ms: number,
  message: string,
): Promise<T> =>
  Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error(message)), ms),
    ),
  ]);

const SW_NOT_READY_MSG = import.meta.env.DEV
  ? 'Service worker not ready. In development, push requires a production build (e.g. npm run preview).'
  : 'Service worker not ready. Refresh the page or open the app again.';

const SW_TIMEOUT_MS = 25_000;

async function getRegistrationWithActiveWorker(): Promise<ServiceWorkerRegistration> {
  const deadline = Date.now() + SW_TIMEOUT_MS;
  const tryReady = (): Promise<ServiceWorkerRegistration> =>
    withTimeout(
      navigator.serviceWorker.ready,
      Math.max(2000, deadline - Date.now()),
      SW_NOT_READY_MSG,
    );

  let reg = await navigator.serviceWorker.getRegistration();
  if (!reg) {
    reg = await withTimeout(
      Promise.race([whenSWRegistered, navigator.serviceWorker.ready]),
      SW_TIMEOUT_MS,
      SW_NOT_READY_MSG,
    );
  }
  if (reg?.active) return reg;

  if (reg?.installing || reg?.waiting) {
    const worker = reg.installing ?? reg.waiting!;
    return new Promise<ServiceWorkerRegistration>((resolve, reject) => {
      const t = setTimeout(() => {
        worker.removeEventListener('statechange', onState);
        reject(new Error(SW_NOT_READY_MSG));
      }, SW_TIMEOUT_MS);
      const onState = (): void => {
        if (worker.state === 'activated' && reg!.active) {
          clearTimeout(t);
          worker.removeEventListener('statechange', onState);
          resolve(reg!);
        }
      };
      worker.addEventListener('statechange', onState);
      if (worker.state === 'activated' && reg.active) {
        clearTimeout(t);
        worker.removeEventListener('statechange', onState);
        resolve(reg);
      }
    });
  }

  return tryReady();
}

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  const output = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    output[i] = rawData.charCodeAt(i);
  }
  return output;
}

export type PushSubscriptionDto = {
  endpoint: string;
  p256dh: string;
  auth: string;
};

export async function subscribeToPush(
  permissionPromise?: Promise<NotificationPermission>,
): Promise<PushSubscriptionDto> {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    throw new Error('Notifications not supported');
  }
  if (!('PushManager' in window) || !('serviceWorker' in navigator)) {
    throw new Error('Push not supported');
  }

  const vapidKey = import.meta.env.VITE_VAPID_PUBLIC_KEY as string | undefined;
  if (!vapidKey) throw new Error('VAPID public key not configured');

  const permission = await (permissionPromise ??
    Notification.requestPermission());
  if (permission !== 'granted') throw new Error('Permission denied');

  const registration = await getRegistrationWithActiveWorker();
  if (!registration.pushManager) throw new Error('Push not available');

  const applicationServerKey = urlBase64ToUint8Array(vapidKey);
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey as unknown as BufferSource,
  });

  const json = subscription.toJSON();
  const keys = json.keys;
  if (!keys?.p256dh || !keys?.auth) throw new Error('Invalid subscription');

  return {
    endpoint: json.endpoint ?? '',
    p256dh: keys.p256dh,
    auth: keys.auth,
  };
}
