const express = require("express");

const authentication = require("./../middlewares/authentication");

const commentsRouter = express.Router();

commentsRouter.post("/", authentication, (req, res) => {
  res.send("success");
});

module.exports = commentsRouter;
