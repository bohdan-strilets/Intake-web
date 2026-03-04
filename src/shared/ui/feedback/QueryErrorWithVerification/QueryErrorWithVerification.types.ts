export type QueryErrorWithVerificationProps = {
  refetch: () => void;
  error?: unknown;
  title: string;
  description: string;
  /** When error is email-not-verified, caller provides resend action (e.g. from useResendVerificationEmailMutation). Keeps shared layer free of feature imports. */
  onResend?: () => Promise<void>;
  isResendPending?: boolean;
};
