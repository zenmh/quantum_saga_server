import { Request, Response } from "express";
import catch_async from "../../../shared/catch_async";
import { BookService } from "./book.service";
import send_response from "../../../shared/send_response";
import { IBook } from "./book.interface";

const createBook = catch_async(async (req: Request, res: Response) => {
  const result = await BookService.createBook(req.body);

  send_response<IBook>(res, {
    status_code: 200,
    success: true,
    message: "Book created successfully !",
    data: result,
  });
});

export const BookController = { createBook };
