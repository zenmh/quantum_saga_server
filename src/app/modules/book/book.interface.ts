import { Model } from "mongoose";

type IBook = {
  title: string;
  author: string;
  genre:
    | "Action"
    | "Adventure"
    | "Biography"
    | "Children's"
    | "Comics"
    | "Cookbooks"
    | "Crime"
    | "Drama"
    | "Fantasy"
    | "Fiction"
    | "History"
    | "Horror"
    | "Mystery"
    | "Poetry"
    | "Romance"
    | "Science Fiction"
    | "Self-help"
    | "Thriller"
    | "Travel";
  publication_date: string;
  reviews: {
    email: string;
    comment: string;
  }[];
};

type BookModel = Model<IBook, Record<string, unknown>>;

export { IBook, BookModel };
