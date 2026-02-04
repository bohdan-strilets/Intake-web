import { axiosInstance } from '../axios-instance';

export const get = async <Response, Params = void>(
  url: string,
  params?: Params,
): Promise<Response> => {
  const response = await axiosInstance.get<Response>(url, { params });
  return response.data;
};
