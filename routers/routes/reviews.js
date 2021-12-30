const express = require("express");

const authentication = require("./../middlewares/authentication");

const reviewsRouter = express.Router();

reviewsRouter.post("/", authentication, (req, res) => {
  res.send("success");
});

module.exports = reviewsRouter;
