import express from "express";
import { authController } from "./auth.controller";

const router = express.Router();


router.get("/current-user", authController.currentUser);

router.get("/sign-in", (req, res) => {
  res.send("sign-in!");
});

router.get("/sign-up", (req, res) => {
  res.send("sign-up!");
});

router.get("/sign-out", (req, res) => {
  res.send("sign-out!");
});

export { router as AuthRouter };
