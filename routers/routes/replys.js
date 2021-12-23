const express = require("express");

const { addReply, getReplyById } = require("./../controllers/replys");
const authentication = require("./../middlewares/authentication");
const authorization = require("./../middlewares/authorization");

const replysRouter = express.Router();

replysRouter.post("/", authentication, addReply);
replysRouter.put(
  "/block/:commentId",
  authentication,
  authorization,
  (req, res) => {
    res.send("success");
  }
);
replysRouter.get("/:replyId", authentication, getReplyById);

module.exports = replysRouter;
