import express from "express";

const router = express.Router();

router.get("/current-user", (req, res) => {
  res.send("Hi there!");
});

router.get("/sign-in", (req, res) => {
  res.send("sign-in!");
});

router.get("/sign-up", (req, res) => {
  res.send("sign-up!");
});

router.get("/sign-out", (req, res) => {
  res.send("sign-out!");
});

export { router as UserRouter };
