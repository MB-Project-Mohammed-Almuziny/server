const express = require("express");

const { addReply, getReplyById } = require("./../controllers/replys");
const authentication = require("./../middlewares/authentication");

const replysRouter = express.Router();

replysRouter.post("/", authentication, addReply);
replysRouter.get("/:replyId", authentication, getReplyById);

module.exports = replysRouter;
