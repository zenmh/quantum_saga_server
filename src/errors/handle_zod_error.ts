import { ZodError, ZodIssue } from "zod";
import {
  IGenericErrorMessage,
  IGenericErrorResponse,
} from "../interfaces/error";

const handle_zod_error = (err: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = err.issues.map((issue: ZodIssue) => ({
    path: issue?.path[issue.path.length - 1],
    message: issue?.message,
  }));

  return {
    status_code: 400,
    message: "Validation Error",
    error_messages: errors,
  };
};

export default handle_zod_error;
