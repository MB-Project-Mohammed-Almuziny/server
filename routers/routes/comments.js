const express = require("express");

const { addcomment, getCommentById } = require("./../controllers/comments");
const authentication = require("./../middlewares/authentication");

const commentsRouter = express.Router();

commentsRouter.post("/", authentication, addcomment);
commentsRouter.get("/:commentId", authentication, getCommentById);

module.exports = commentsRouter;
