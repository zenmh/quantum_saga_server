type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

type IGenericErrorResponse = {
  status_code: number;
  message: string;
  error_messages: IGenericErrorMessage[];
};

export { IGenericErrorMessage, IGenericErrorResponse };
