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

type IBook = {
  title: string;
  author: string;
  genre: IGenre;
  publication_date: string;
  reviews: {
    email: string;
    comment: string;
  }[];
};

type BookModel = Model<IBook, Record<string, unknown>>;

type IBookFilterableFields = {
  searchTerm?: string;
  genre?: IGenre;
  publication_date?: string;
};

export { IBook, BookModel, IBookFilterableFields };
