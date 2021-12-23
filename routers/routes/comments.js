const express = require("express");

const { addcomment } = require("./../controllers/comments");
const authentication = require("./../middlewares/authentication");

const commentsRouter = express.Router();

commentsRouter.post("/", authentication, addcomment);

module.exports = commentsRouter;
