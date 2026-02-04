export const API_ROUTES = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    refresh: '/auth/refresh',
    logout: '/auth/logout',
  },

  users: {
    me: '/users/me',
    profile: '/users/me/profile',
    email: '/users/me/email',
    password: '/users/me/password',
  },

  days: {
    list: '/days',
    byDate: (date: string) => `/days/${date}`,
  },

  food: {
    addManual: '/food/manual',
    addAI: '/food/ai',
    delete: (id: string) => `/food/${id}`,
  },

  stats: {
    range: '/stats/range',
  },
} as const;
