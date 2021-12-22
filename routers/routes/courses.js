const express = require("express");

const {
  getAllCourses,
  createCourse,
  coursesSearch,
  getCourseByCategory,
  getCourseById,
  updateCourseById,
} = require("./../controllers/courses");
const authentication = require("./../middlewares/authentication");
const authorization = require("./../middlewares/authorization");

const coursesRouter = express.Router();

coursesRouter.get("/", getAllCourses);
coursesRouter.post("/", authentication, createCourse);
coursesRouter.get("/search/:term", coursesSearch);
coursesRouter.get("/category/:category", getCourseByCategory);
coursesRouter.get("/:courseId", getCourseById);
coursesRouter.put("/:courseId", authentication, updateCourseById);
coursesRouter.put(
  "/block/:courseId",
  authentication,
  authorization,
  (req, res) => {
    res.send("success");
  }
);

module.exports = coursesRouter;
