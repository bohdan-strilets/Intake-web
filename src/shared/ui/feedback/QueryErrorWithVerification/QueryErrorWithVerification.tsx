import { toast } from 'sonner';

import { ApiError, ERROR_CODES, errorKeyMap } from '@shared/api/error';
import { useTranslation } from '@shared/i18n';
import { EmailNotVerifiedState } from '@shared/ui/feedback/EmailNotVerifiedState';
import { ErrorState } from '@shared/ui/feedback/ErrorState';

import type { QueryErrorWithVerificationProps } from './QueryErrorWithVerification.types';

export const QueryErrorWithVerification = ({
  refetch,
  error,
  title,
  description,
  onResend: onResendProp,
  isResendPending = false,
}: QueryErrorWithVerificationProps) => {
  const { t: tAuth } = useTranslation('auth');
  const { t: tCommon } = useTranslation('common');

  const isEmailNotVerified =
    error instanceof ApiError && error.code === ERROR_CODES.EMAIL_NOT_VERIFIED;

  const handleResend = async () => {
    if (!onResendProp) return;
    try {
      await onResendProp();
      toast.success(tAuth('feedback.verificationEmailResent'));
      refetch();
    } catch (err) {
      if (
        err instanceof ApiError &&
        err.code === ERROR_CODES.VERIFICATION_EMAIL_SEND_FAILED
      ) {
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
        onResend={onResendProp ? handleResend : undefined}
        isResendPending={isResendPending}
        tryAgainLabel={tCommon('actions.tryAgain')}
        onTryAgain={refetch}
      />
    );
  }

  return (
    <ErrorState
      title={title}
      description={description}
      actionLabel={tCommon('actions.tryAgain')}
      onAction={refetch}
    />
  );
};
