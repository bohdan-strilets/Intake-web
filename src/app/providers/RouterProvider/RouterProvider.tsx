import { RouterProvider } from '@tanstack/react-router';

import { router } from '@app/router';

export const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};
