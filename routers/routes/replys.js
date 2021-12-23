const express = require("express");

const { addReply } = require("./../controllers/replys");
const authentication = require("./../middlewares/authentication");

const replysRouter = express.Router();

replysRouter.post("/", authentication, addReply);
replysRouter.get("/:replyId", authentication, (req, res) => {
  res.send("success");
});

module.exports = replysRouter;
