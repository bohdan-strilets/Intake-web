import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { authSelectors, tokenStorage } from '@entities/session';

import { errorKeyMap } from '@shared/api/error';
import { useTranslation } from '@shared/i18n';
import { notify } from '@shared/lib/notify';
import { ROUTES } from '@shared/routes';

import { deleteProfileApi } from './api';

export const useDeleteProfileMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');

  return useMutation({
    mutationFn: deleteProfileApi,

    onSuccess: () => {
      queryClient.clear();
      authSelectors.clear();
      tokenStorage.clear();

      navigate({ to: ROUTES.public.home });
      notify.success(tProfile('feedback.accountDeleted'));
    },

    onError: () => {
      notify.error(tCommon(errorKeyMap.SERVER_ERROR));
    },
  });
};
