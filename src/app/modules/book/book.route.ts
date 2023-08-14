import { Router } from "express";
import validate_request from "../../middlewares/validate_request";
import { BookValidation } from "./book.validation";
import { BookController } from "./book.controller";

const router = Router();

// Create
router.post(
  "/create_book",
  validate_request(BookValidation.createBookZodSchema),
  BookController.createBook
);

// Update

// Delete

// Read

export const BookRoutes = router;
