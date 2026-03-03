import { toast } from 'sonner';

import { useResendVerificationEmailMutation } from '@features/auth/resendVerificationEmail';
import { ApiError, ERROR_CODES, errorKeyMap } from '@shared/api/error';
import { useTranslation } from '@shared/i18n';
import { EmailNotVerifiedState } from '@shared/ui/feedback/EmailNotVerifiedState';
import { ErrorState } from '@shared/ui/feedback/ErrorState';

import type { ErrorProps } from './Error.types';

export const Error = ({ refetch, error }: ErrorProps) => {
  const { t: tStats } = useTranslation('stats');
  const { t: tAuth } = useTranslation('auth');
  const { t: tCommon } = useTranslation('common');

  const isEmailNotVerified =
    error instanceof ApiError && error.code === ERROR_CODES.EMAIL_NOT_VERIFIED;

  const { mutateAsync: resendVerification, isPending: isResendPending } =
    useResendVerificationEmailMutation();

  const handleResend = async () => {
    try {
      await resendVerification();
      toast.success(tAuth('feedback.verificationEmailResent'));
      refetch();
    } catch (err) {
      if (err instanceof ApiError && err.code === ERROR_CODES.VERIFICATION_EMAIL_SEND_FAILED) {
        toast.error(tAuth(errorKeyMap.VERIFICATION_EMAIL_SEND_FAILED));
      } else {
        toast.error(tCommon('errors.server'));
      }
    }
  };

  if (isEmailNotVerified) {
    return (
      <EmailNotVerifiedState
        title={tAuth('verification.emailNotVerifiedTitle')}
        description={tAuth('verification.emailNotVerifiedDescription')}
        resendLabel={tAuth('verification.resendButton')}
        onResend={handleResend}
        isResendPending={isResendPending}
        tryAgainLabel={tCommon('actions.tryAgain')}
        onTryAgain={refetch}
      />
    );
  }

  return (
    <ErrorState
      title={tStats('errors.statsLoad.title')}
      description={tStats('errors.statsLoad.description')}
      actionLabel={tCommon('actions.tryAgain')}
      onAction={refetch}
    />
  );
};
