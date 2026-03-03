export type QueryErrorWithVerificationProps = {
  refetch: () => void;
  error?: unknown;
  title: string;
  description: string;
};
