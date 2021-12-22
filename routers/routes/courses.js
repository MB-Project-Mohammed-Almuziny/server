const express = require("express");

const authentication = require("./../middlewares/authentication");

const coursesRouter = express.Router();

coursesRouter.post("/", authentication, (req, res) => {
  res.send("success");
});

module.exports = coursesRouter;
