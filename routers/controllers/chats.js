const chatsModel = require("./../../db/models/chats");

const sendMessage = (req, res) => {
  try {
    const { sender, receiver, content } = req.body;

    chatsModel
      .findOneAndUpdate(
        {
          $or: [{ user1: sender }, { user1: receiver }],
          $or: [{ user2: sender }, { user2: receiver }],
        },
        { $push: { messages: { content, sender } } },
        { new: true }
      )
      .then((result) => {
        if (result) res.status(200).json(result);
        else {
          const newChatRoom = new chatsModel({
            user1: sender,
            user2: receiver,
            messages: [{ content, sender }],
          });

          newChatRoom
            .save()
            .then((result) => {
              res.status(201).json(result);
            })
            .catch((err) => {
              res.status(400).json({ error: err.message });
            });
        }
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUserChats = (req, res) => {
  try {
    const { userId } = req.params;

    chatsModel
      .find({ $or: [{ user1: userId }, { user1: userId }] })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getChatById = (req, res) => {
  try {
    chatsModel
      .findById(req.params.chatId)
      .then((result) => {
        if (result) res.status(200).json(result);
        else res.status(404).json({ error: " chat not found" });
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = { sendMessage, getUserChats, getChatById };
