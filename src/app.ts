import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { routes } from "./app/routes.ts";

const app: Application = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", routes);

// Global Error Handler
// app.use("/", global_error_handler);

// Test route
app.get("/", async (req: Request, res: Response) => {
  res.json("The Quantum Sage is running 🔥💧🔥");
});

export default app;
