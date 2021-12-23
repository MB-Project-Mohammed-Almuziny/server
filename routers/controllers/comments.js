const commentModel = require("./../../db/models/comments");

const addcomment = (req, res) => {
  try {
    const { creator, description, reference } = req.body;

    const newComment = new commentModel({
      creator,
      description,
      reference,
    });

    newComment
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

module.exports = { addcomment };
