const reviewsModel = require("./../../db/models/reviews");

const createReview = (req, res) => {
  try {
    const { creator, rating, description, reference } = req.body;

    const newReview = new reviewsModel({
      creator,
      rating,
      description,
      reference,
    });

    newReview
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

module.exports = { createReview };
