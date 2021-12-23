const express = require("express");

const { sendMessage, getUserChats } = require("./../controllers/chats");
const authentication = require("./../middlewares/authentication");

const chatsRouter = express.Router();

chatsRouter.post("/", authentication, sendMessage);
chatsRouter.get("/user/:userId", authentication, getUserChats);

module.exports = chatsRouter;
