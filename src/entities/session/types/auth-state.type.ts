export type AuthState = {
  accessToken: string | null;
  isAuthenticated: boolean;

  login: (token: string) => void;
  logout: () => void;
};
