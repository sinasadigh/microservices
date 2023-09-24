import express, { Request, Response, NextFunction, ErrorRequestHandler} from "express";
const router = express.Router();
import { routes } from "./routes";



// export { router as authRouter };

function authRouter(app: any, Sentry: any) {
  app.use(
    "/api",
    (req: Request, res: Response, next: NextFunction) => {
      console.log(`${req.method} ${req.originalUrl} from ${req.ip}`);
      next();
    },
    routes
  );

  router.get("/current-version", function mainHandler(req, res) {
    const { version } = require("../../../package.json");
    return { version };
  });
  // app.use(
  //   "/health-check",
  //   require("express-healthcheck")({  })
  // );
  // router.get("/", (req, res, next) => res.json({ index: "/" }));


  // app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  //   globalExceptionHandlerController.handleException(err, req, res, next);
  // });
  app.use(Sentry.Handlers.errorHandler());
}

export { authRouter };
