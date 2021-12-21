const express = require("express");

const { register, logIn, setting } = require("./../controllers/users");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", logIn);
userRouter.put("/:userId", setting);

module.exports = userRouter;
