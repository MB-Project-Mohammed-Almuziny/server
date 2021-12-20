const express = require("express");

const { register, logIn } = require("./../controllers/users");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", logIn);
userRouter.put("/:userId", (req, res) => {
  res.send("success");
});

module.exports = userRouter;
