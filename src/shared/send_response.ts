import { Response } from "express";

type ISendResponse<T> = {
  status_code: number;
  success: boolean;
  message?: string | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  } | null;
  data?: T | null;
};

const send_response = <T>(res: Response, data: ISendResponse<T>): void => {
  const response: ISendResponse<T> = {
    status_code: data.status_code,
    success: data.success,
    message: data?.message || null,
    meta: data.meta || null,
    data: data?.data,
  };

  res.status(data.status_code).json(response);
};

export default send_response;
