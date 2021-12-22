const coursesModel = require("./../../db/models/courses");

const getAllCourses = (req, res) => {
  try {
    coursesModel.find({ isBocked: false }).then((result) => {
      res.status(200).json(result);
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const createCourse = (req, res) => {
  try {
    const { title, about, description, creator, category } = req.body;

    const newCourse = coursesModel({
      title,
      about,
      description,
      creator,
      category,
    });

    newCourse
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

module.exports = { getAllCourses, createCourse };
