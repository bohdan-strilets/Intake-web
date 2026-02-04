import { axiosInstance } from '../axios-instance';

export const post = async <Response, Body = void, Params = void>(
  url: string,
  body: Body,
  params?: Params,
): Promise<Response> => {
  const response = await axiosInstance.post<Response>(url, body, { params });
  return response.data;
};
