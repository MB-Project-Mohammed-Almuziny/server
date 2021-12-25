const coursesModel = require("./../../db/models/courses");

const getAllCourses = (req, res) => {
  try {
    coursesModel
      .find({ isBocked: false })
      .populate({ path: "creator", select: "name" })
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

const getCourseByCategory = (req, res) => {
  try {
    const category = req.params.category;

    coursesModel
      .find({ category, isBocked: false })
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

const addLesson = (req, res) => {
  try {
    const { courseId, lesson } = req.body;

    coursesModel
      .findByIdAndUpdate(
        courseId,
        { $push: { lessons: lesson } },
        { new: true }
      )
      .then((result) => res.status(200).json(result));
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

const updateCourseById = (req, res) => {
  try {
    const { title, about, description } = req.body;

    const update = {};
    if (title) update.title = title;
    if (about) update.about = about;
    if (description) update.description = description;

    coursesModel
      .findByIdAndUpdate(req.params.courseId, update, { new: true })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const blockCourse = (req, res) => {
  try {
    coursesModel
      .findByIdAndUpdate(req.params.courseId, { isBocked: true }, { new: true })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllCourses,
  createCourse,
  coursesSearch,
  getCourseByCategory,
  addLesson,
  getCourseById,
  updateCourseById,
  blockCourse,
};
