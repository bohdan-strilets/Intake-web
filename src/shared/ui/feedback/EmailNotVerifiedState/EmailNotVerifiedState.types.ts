export type EmailNotVerifiedStateProps = {
  title: string;
  description?: string;
  resendLabel: string;
  onResend: () => void | Promise<void>;
  isResendPending?: boolean;
  tryAgainLabel?: string;
  onTryAgain?: () => void;
};
