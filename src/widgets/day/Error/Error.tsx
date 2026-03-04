import { useResendVerificationEmailMutation } from '@features/auth/resendVerificationEmail';

import { useTranslation } from '@shared/i18n';
import { QueryErrorWithVerification } from '@shared/ui/feedback/QueryErrorWithVerification';

import type { ErrorProps } from './Error.types';

export const Error = ({ refetch, error }: ErrorProps) => {
  const { t } = useTranslation('day');
  const { mutateAsync: resendVerification, isPending: isResendPending } =
    useResendVerificationEmailMutation();

  const handleResend = async () => {
    await resendVerification();
  };

  return (
    <QueryErrorWithVerification
      refetch={refetch}
      error={error}
      title={t('errors.dayLoad.title')}
      description={t('errors.dayLoad.description')}
      onResend={handleResend}
      isResendPending={isResendPending}
    />
  );
};
