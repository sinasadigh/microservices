import express from "express";
const router = express.Router();
import { routes } from "./routes";



// export { router as authRouter };

function authRouter(app: any, Sentry: any) {
  app.use(
    "/api",
    // (req: any, res: any, next: any) => {
    //   console.log(`${req.method} ${req.originalUrl} from ${req.ip}`);
    //   next();
    // },
    routes
  );
  // router.get("/debug-sentry", function mainHandler(req, res) {
  //   throw new Error("My first Sentry error!");
  // });
console.log("test")
  router.get("/current-version", function mainHandler(req, res) {
    const { version } = require("../../../package.json");
    return { version };
  });
  // app.use(
  //   "/health-check",
  //   require("express-healthcheck")({  })
  // );
  // router.get("/", (req, res, next) => res.json({ index: "/" }));


  // app.use((err, req, res, next) => {
  //   globalExceptionHandlerController.handleException(err, req, res, next);
  // });
  app.use(Sentry.Handlers.errorHandler());
}

export { authRouter };
