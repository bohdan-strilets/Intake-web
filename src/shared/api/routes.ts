export const API_ROUTES = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    refresh: '/auth/refresh',
    logout: '/auth/logout',
    restore: '/auth/restore',
  },

  users: {
    me: '/users/me',
    profile: '/users/me/profile',
    email: '/users/me/email',
    password: '/users/me/password',
    delete: '/users/me/delete',
    settings: '/users/me/settings',
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
    range: '/stats',
  },
} as const;
