const express = require("express");

const authentication = require("./../middlewares/authentication");

const replysRouter = express.Router();

replysRouter.post("/", authentication, (req, res) => {
  res.send("success");
});

module.exports = replysRouter;
