import { Toaster } from 'sonner';

export function ToastProvider() {
  return (
    <Toaster position="top-center" richColors duration={4000} expand={false} />
  );
}
