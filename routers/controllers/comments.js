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

const getCommentById = (req, res) => {
  try {
    commentModel
      .find({ _id: req.params.commentId, isBocked: false })
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

module.exports = { addcomment, getCommentById };
