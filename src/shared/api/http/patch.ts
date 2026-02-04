import { axiosInstance } from '../axios-instance';

export const patch = async <Response, Body = void, Params = void>(
  url: string,
  body: Body,
  params?: Params,
): Promise<Response> => {
  const response = await axiosInstance.patch<Response>(url, body, { params });
  return response.data;
};
