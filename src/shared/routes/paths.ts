export const ROUTES = {
  public: {
    home: '/',
  },

  auth: {
    login: '/login',
    register: '/register',
  },

  app: {
    calendar: '/calendar',
    today: '/today',
    day: '/day/$date',
    stats: '/stats',
    profile: '/profile',
  },
} as const;
