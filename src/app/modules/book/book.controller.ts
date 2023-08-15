import { Request, Response } from "express";
import catch_async from "../../../shared/catch_async";
import { BookService } from "./book.service";
import send_response from "../../../shared/send_response";
import { IBook } from "./book.interface";
import pick from "../../../shared/pick";
import { books_filterable_fields } from "./book.constant";
import { pagination_fields } from "../../../constants/pagination_fields";

const getBooks = catch_async(async (req: Request, res: Response) => {
  const filters = pick(req.query, books_filterable_fields);

  const pagination_options = pick(req.query, pagination_fields);

  const result = await BookService.getBooks(filters, pagination_options);

  send_response<IBook[]>(res, {
    status_code: 200,
    success: true,
    message: "Books retrived successfully !",
    meta: result?.meta,
    data: result?.data,
  });
});

const createBook = catch_async(async (req: Request, res: Response) => {
  const result = await BookService.createBook(req.body);

  send_response<IBook>(res, {
    status_code: 200,
    success: true,
    message: "Book created successfully !",
    data: result,
  });
});

const updateBook = catch_async(async (req: Request, res: Response) => {
  const result = await BookService.updateBook(req.params.id, req.body);

  send_response<IBook>(res, {
    status_code: 200,
    success: true,
    message: "Book updated successfully !",
    data: result,
  });
});

const deleteBook = catch_async(async (req: Request, res: Response) => {
  const result = await BookService.deleteBook(req.params.id);

  send_response<IBook>(res, {
    status_code: 200,
    success: true,
    message: "Book deleted successfully !",
    data: result,
  });
});

export const BookController = { getBooks, createBook, updateBook, deleteBook };
