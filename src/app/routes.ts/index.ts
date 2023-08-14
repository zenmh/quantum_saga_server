import { Router } from "express";
import { BookRoutes } from "../modules/book/book.route";

const router = Router();

[{ path: "/books", route: BookRoutes }].forEach((rt) =>
  router.use(rt.path, rt.route)
);

export const routes = router;
