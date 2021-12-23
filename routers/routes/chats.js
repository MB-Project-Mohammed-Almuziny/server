const express = require("express");

const { sendMessage } = require("./../controllers/chats");
const authentication = require("./../middlewares/authentication");

const chatsRouter = express.Router();

chatsRouter.post("/", authentication, sendMessage);
chatsRouter.get("/user/:userId", authentication, (req, res) => {
  res.send("success");
});

module.exports = chatsRouter;
