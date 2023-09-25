import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import { authRouter } from "./router/index";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";
import * as Sentry from "@sentry/node";
import { db } from "./startup/db";
Sentry.init({
  dsn: "",
});

const app = express();
app.use(json());

const server = app.listen(3000, async () => {
  await db();
  authRouter(app, Sentry);

  app.all("*", async (req, res) => {
    throw new NotFoundError();
  });

  app.use(errorHandler);
  console.log("Listening on port 3000!!!!!!!!");
});

export default server;
