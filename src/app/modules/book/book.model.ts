import { Schema, model } from "mongoose";
import { BookModel, IBook } from "./book.interface";
import { book_genres } from "./book.constant";

const book_schema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: book_genres,
      required: true,
    },
    publication_date: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    reviews: [
      {
        email: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    updated_at: {
      type: String,
      required: false,
    },
    wishlist: {
      type: [String],
    },
    read_soon: {
      type: [String],
    },
    currently_reading: {
      type: [String],
    },
    finished: {
      type: [String],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const Book = model<IBook, BookModel>("Book", book_schema);

export { Book };
