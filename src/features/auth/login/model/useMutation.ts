import { useMutation } from '@tanstack/react-query';

import { loginUserApi } from '../api';

export const useLoginMutation = () => useMutation({ mutationFn: loginUserApi });
