import type { FormValues } from '../types';

export const mapToEditPasswordDto = (values: FormValues) => {
  return {
    currentPassword: values.currentPassword,
    newPassword: values.newPassword,
  };
};
