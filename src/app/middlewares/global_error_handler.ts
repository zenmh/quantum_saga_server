import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import config from "../../config";
import { IGenericErrorMessage } from "../../interfaces/error";
import { ZodError } from "zod";
import handle_zod_error from "../../errors/handle_zod_error";

const global_error_handler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  config.env === "development"
    ? console.log("gobal_error_handler ~ 💀😈💀", err)
    : console.log("global_error_handler ~ 💀😈💀", err);

  let status_code = 500;
  let message = "Something wrong !!";
  let error_messages: IGenericErrorMessage[] = [];

  if (err instanceof ZodError) {
    const simplefied_error = handle_zod_error(err);

    status_code = simplefied_error.status_code;
    message = simplefied_error.message;
    error_messages = simplefied_error.error_messages;
  }

  res.status(status_code).json({
    success: false,
    message,
    error_messages,
    stack: config.env !== "production" ? err?.stack : undefined,
  });
};

export default global_error_handler;
