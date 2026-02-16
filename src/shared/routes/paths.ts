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
    day: '/day/$date',
    stats: '/stats',
    profile: '/profile',
    editProfile: '/profile/edit',
    editEmail: '/profile/edit-email',
    editPassword: '/profile/edit-password',
  },
} as const;
