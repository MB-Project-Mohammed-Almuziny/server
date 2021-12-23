const express = require("express");

const { addcomment, getCommentById } = require("./../controllers/comments");
const authentication = require("./../middlewares/authentication");
const authorization = require("./../middlewares/authorization");

const commentsRouter = express.Router();

commentsRouter.post("/", authentication, addcomment);
commentsRouter.put(
  "/block/:commentId",
  authentication,
  authorization,
  (req, res) => {
    res.send("success");
  }
);
commentsRouter.get("/:commentId", authentication, getCommentById);

module.exports = commentsRouter;
