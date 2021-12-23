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

module.exports = { addReply };
