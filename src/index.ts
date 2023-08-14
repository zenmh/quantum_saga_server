import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";
import config from "./config";

let server: Server;

const run = async () => {
  try {
    await mongoose.connect(config.db_uri as string);

    console.log("Database connected 🛢 🛢 🛢");

    server = app.listen(config.port, () =>
      console.log(
        `The server is listening on port http://localhost:${config.port}`
      )
    );
  } catch (err) {
    console.log("Failed to connect database ❌ 🛢 ❌", err);
  }
};

run();
