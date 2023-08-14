import { NextFunction, Request, RequestHandler, Response } from "express";

const catch_async =
  (func: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      func(req, res, next);
    } catch (err) {
      next(err);
    }
  };

export default catch_async;
