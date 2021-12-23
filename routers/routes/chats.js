const express = require("express");

const { sendMessage } = require("./../controllers/chats");
const authentication = require("./../middlewares/authentication");

const chatsRouter = express.Router();

chatsRouter.post("/", authentication, sendMessage);

module.exports = chatsRouter;
