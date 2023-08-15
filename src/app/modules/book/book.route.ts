import { Router } from "express";
import validate_request from "../../middlewares/validate_request";
import { BookValidation } from "./book.validation";
import { BookController } from "./book.controller";

const router = Router();

// Create
router.post(
  "/",
  validate_request(BookValidation.createBookZodSchema),
  BookController.createBook
);

// Update
router.patch(
  "/:id",
  validate_request(BookValidation.updateBookZodSchema),
  BookController.updateBook
);

// Delete

router.delete("/:id", BookController.deleteBook);

// Read
router.get("/", BookController.getBooks);

export const BookRoutes = router;
