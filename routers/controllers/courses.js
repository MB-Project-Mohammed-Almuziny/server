const coursesModel = require("./../../db/models/courses");

const getAllCourses = (req, res) => {
  try {
    coursesModel
      .find({ isBocked: false })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json({ err: err.message });
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

const coursesSearch = (req, res) => {
  try {
    const regexTerm = new RegExp(req.params.term);

    coursesModel
      .find({ title: regexTerm, isBocked: false })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json({ err: err.message });
      });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getCourseById = (req, res) => {
  try {
    coursesModel
      .find({ _id: req.params.courseId, isBocked: false })
      .then((result) => {
        if (result && result[0]) res.status(200).json(result);
        else res.status(404).json({ error: " course not found" });
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = { getAllCourses, createCourse, coursesSearch, getCourseById };
