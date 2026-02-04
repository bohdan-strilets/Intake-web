import { axiosInstance } from '../axios-instance';

export const put = async <Response, Body = void, Params = void>(
  url: string,
  body: Body,
  params?: Params,
): Promise<Response> => {
  const response = await axiosInstance.put<Response>(url, body, { params });
  return response.data;
};
