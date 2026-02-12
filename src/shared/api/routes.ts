export const API_ROUTES = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    refresh: '/auth/refresh',
    logout: '/auth/logout',
    me: '/auth/me',
  },

  users: {
    me: '/users/me',
    profile: '/users/me/profile',
    email: '/users/me/email',
    password: '/users/me/password',
  },

  days: {
    list: '/days',
    byDate: (date: string) => `/day-details/${date}`,
  },

  food: {
    addAI: '/food/add/from-ai',
    delete: (id: string) => `/food/${id}`,
    editWeight: (id: string) => `/food/${id}/weight`,
  },

  stats: {
    range: '/stats/range',
  },
} as const;
