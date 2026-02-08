import { axiosInstance } from '../axiosInstance';

export const del = async <Response, Params = void>(
  url: string,
  params?: Params,
): Promise<Response> => {
  const response = await axiosInstance.delete<Response>(url, { params });
  return response.data;
};
