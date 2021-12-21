const express = require("express");

const {
  register,
  verifyUser,
  logIn,
  forgetPassword,
  setting,
  getUserInfo,
} = require("./../controllers/users");
const authentication = require("./../middlewares/authentication");
const authorization = require("./../middlewares/authorization");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.get("/verify/:token", verifyUser);
userRouter.post("/login", logIn);
userRouter.post("/forgetPass", authentication, forgetPassword);
userRouter.put("/:userId", authentication, setting);
userRouter.get("/info/:userId", authentication, getUserInfo);
userRouter.put("/block/:userId", authentication, authorization, (req, res) => {
  res.send("success");
});

module.exports = userRouter;
