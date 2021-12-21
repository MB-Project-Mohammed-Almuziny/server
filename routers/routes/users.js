const express = require("express");

const {
  register,
  verifyUser,
  logIn,
  forgetPassword,
  setting,
} = require("./../controllers/users");
const authentication = require("./../middlewares/authentication");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.get("/verify/:token", verifyUser);
userRouter.post("/login", logIn);
userRouter.post("/forgetPass", authentication, forgetPassword);
userRouter.put("/:userId", authentication, setting);

module.exports = userRouter;
