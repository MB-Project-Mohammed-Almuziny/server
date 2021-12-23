const replysModel = require("./../../db/models/replys");

const addReply = (req, res) => {
  try {
    const { creator, description, reference } = req.body;

    const newReply = new replysModel({
      creator,
      description,
      reference,
    });

    newReply
      .save()
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getReplyById = (req, res) => {
  try {
    replysModel
      .find({ _id: req.params.replyId, isBocked: false })
      .then((result) => {
        if (result && result[0]) res.status(200).json(result);
        else res.status(404).json({ error: " comment not found" });
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = { addReply, getReplyById };
