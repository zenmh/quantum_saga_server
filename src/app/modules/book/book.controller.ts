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

const getBook = catch_async(async (req: Request, res: Response) => {
  const result = await BookService.getBook(req.params.id);

  send_response<IBook>(res, {
    status_code: 200,
    success: true,
    message: "Book retrived successfully !",
    data: result,
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
  const result = await BookService.deleteBook(req.params.id, req.body);

  send_response<IBook>(res, {
    status_code: 200,
    success: true,
    message: "Book deleted successfully !",
    data: result,
  });
});

const addReview = catch_async(async (req: Request, res: Response) => {
  const result = await BookService.addReview(req.params.id, req.body);

  send_response<IBook>(res, {
    status_code: 200,
    success: true,
    message: "Review added successfully !",
    data: result,
  });
});

const addToWishlist = catch_async(async (req: Request, res: Response) => {
  const result = await BookService.addToWishlist(req.params.id, req.body);

  send_response<IBook>(res, {
    status_code: 200,
    success: true,
    message: "Book added to wishlist !",
    data: result,
  });
});

const removeFromWishlist = catch_async(async (req: Request, res: Response) => {
  const result = await BookService.removeFromWishlist(
    req.params.id,
    req.body.email
  );

  send_response<IBook>(res, {
    status_code: 200,
    success: true,
    message: "Book added to wishlist !",
    data: result,
  });
});

const addToReadSoon = catch_async(async (req: Request, res: Response) => {
  const result = await BookService.addToReadSoon(req.params.id, req.body);

  send_response<IBook>(res, {
    status_code: 200,
    success: true,
    message: "Book added to read soon !",
    data: result,
  });
});

const addToCurrentlyReading = catch_async(
  async (req: Request, res: Response) => {
    const result = await BookService.addToCurrentlyReading(
      req.params.id,
      req.body
    );

    send_response<IBook>(res, {
      status_code: 200,
      success: true,
      message: "Book added to currently reading !",
      data: result,
    });
  }
);

const addToFinished = catch_async(async (req: Request, res: Response) => {
  const result = await BookService.addToFinished(req.params.id, req.body);

  send_response<IBook>(res, {
    status_code: 200,
    success: true,
    message: "Book added to finished !",
    data: result,
  });
});

export const BookController = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  addReview,
  addToWishlist,
  removeFromWishlist,
  addToReadSoon,
  addToCurrentlyReading,
  addToFinished,
};
