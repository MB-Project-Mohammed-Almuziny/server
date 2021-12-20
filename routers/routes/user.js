const express = require("express");

const { register } = require("./../controllers/users");

const userRouter = express.Router();

userRouter.post("/register", register);

userRouter.get("/login", (req, res) => {
  try {
    res.status(200).json("success");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = userRouter;
