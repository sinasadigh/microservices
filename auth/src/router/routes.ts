import express from "express";
const router = express.Router();
import { AuthRouter } from "../application/auth/auth.router";
import { UserRouter } from "../application/user/user.router";

router.use("/auth", AuthRouter);
router.use("/users", UserRouter);

router.get("/current-version", function mainHandler(req, res) {
  const { version } = require("../../package.json");
  res.send({ version });
});
export { router as routes };
