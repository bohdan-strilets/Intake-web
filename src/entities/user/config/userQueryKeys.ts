export const userQueryKeys = {
  all: ['user'] as const,

  profile: () => [...userQueryKeys.all, 'profile'] as const,
  goalProgress: () => [...userQueryKeys.all, 'goal-progress'] as const,

  byId: (id: string) => [...userQueryKeys.all, 'by-id', id] as const,
};
