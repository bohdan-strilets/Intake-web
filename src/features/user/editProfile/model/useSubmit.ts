import { useNavigate } from '@tanstack/react-router';
import type { UseFormReturn } from 'react-hook-form';

import { ApiError, errorMessages } from '@shared/api/error';
import { notify } from '@shared/lib/notify';
import { ROUTES } from '@shared/routes';

import { mapValueToDto } from '../mappers';
import type { FormValues } from '../types';

import { useEditProfileMutation } from './useMutation';

export const useSubmit = (methods: UseFormReturn<FormValues>) => {
  const { mutateAsync, isPending } = useEditProfileMutation();
  const navigate = useNavigate();

  const onSubmit = async (values: FormValues) => {
    try {
      const dto = mapValueToDto(values);
      await mutateAsync(dto);

      notify.success('Profile updated successfully');
      navigate({ to: ROUTES.app.profile });
    } catch (error) {
      if (!(error instanceof ApiError)) return;

      if (error.code === 'UNAUTHORIZED') {
        methods.setError('root', {
          message: errorMessages.UNAUTHORIZED,
        });
        return;
      }

      if (error.code === 'VALIDATION_ERROR') {
        methods.setError('root', {
          message: errorMessages.VALIDATION_ERROR,
        });
      }
    }
  };

  return { onSubmit, isPending };
};
