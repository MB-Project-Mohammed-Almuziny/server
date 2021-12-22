const express = require("express");

const {
  getAllCourses,
  createCourse,
  coursesSearch,
  getCourseByCategory,
  getCourseById,
} = require("./../controllers/courses");
const authentication = require("./../middlewares/authentication");

const coursesRouter = express.Router();

coursesRouter.get("/", getAllCourses);
coursesRouter.post("/", authentication, createCourse);
coursesRouter.get("/search/:term", coursesSearch);
coursesRouter.get("/category/:category", getCourseByCategory);
coursesRouter.get("/:courseId", getCourseById);
coursesRouter.put("/:courseId", authentication, (req, res) => {
  res.send("success");
});

module.exports = coursesRouter;
