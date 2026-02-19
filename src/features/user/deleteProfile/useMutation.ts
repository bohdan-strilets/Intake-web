import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { authSelectors, tokenStorage } from '@entities/session';

import { errorMessages } from '@shared/api/error';
import { notify } from '@shared/lib/notify';
import { ROUTES } from '@shared/routes';

import { deleteProfileApi } from './api';

export const useDeleteProfileMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: deleteProfileApi,

    onSuccess: () => {
      queryClient.clear();
      authSelectors.clear();
      tokenStorage.clear();

      navigate({ to: ROUTES.public.home });
      notify.success('Your account has been deleted');
    },

    onError: () => {
      notify.error(errorMessages.SERVER_ERROR);
    },
  });
};
