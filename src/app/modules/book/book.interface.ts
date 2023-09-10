import { Model } from "mongoose";

type IGenre = {
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
};

type IBookReview = {
  email: string;
  comment: string;
};

type IBook = {
  title: string;
  author: string;
  genre: IGenre;
  publication_date: string;
  email: string;
  reviews: IBookReview[];
  updated_at?: string;
  wishlist?: string[];
  read_soon?: string[];
  currently_reading?: string[];
  finished?: string[];
};

type BookModel = Model<IBook, Record<string, unknown>>;

type IBookFilterableFields = {
  searchTerm?: string;
  genre?: IGenre;
  publication_date?: string;
};

export { IBook, BookModel, IBookFilterableFields, IBookReview };
