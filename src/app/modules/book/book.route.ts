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

router.patch(
  "/review/:id",
  validate_request(BookValidation.addReviewZodSchema),
  BookController.addReview
);

router.patch("/add_to_wishlist/:id", BookController.addToWishlist);

router.patch("/remove_from_wishlist/:id", BookController.removeFromWishlist);

router.patch("/add_to_read_soon/:id", BookController.addToReadSoon);

router.patch(
  "/add_to_currently_reading/:id",
  BookController.addToCurrentlyReading
);

router.patch("/add_to_finished/:id", BookController.addToFinished);

// Delete
router.delete("/:id", BookController.deleteBook);

// Read
router.get("/", BookController.getBooks);

router.get("/:id", BookController.getBook);

export const BookRoutes = router;
