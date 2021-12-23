const express = require("express");

const authentication = require("./../middlewares/authentication");

const chatsRouter = express.Router();

chatsRouter.post("/", authentication, (req, res) => {
  res.send("success");
});

module.exports = chatsRouter;
