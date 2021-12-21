const express = require("express");

const { register, logIn, setting } = require("./../controllers/users");
const authentication = require("./../middlewares/authentication");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", logIn);
userRouter.put("/:userId", authentication, setting);

module.exports = userRouter;
