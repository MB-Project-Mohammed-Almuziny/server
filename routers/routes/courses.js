const express = require("express");

const {
  getAllCourses,
  createCourse,
  coursesSearch,
} = require("./../controllers/courses");
const authentication = require("./../middlewares/authentication");

const coursesRouter = express.Router();

coursesRouter.get("/", getAllCourses);
coursesRouter.post("/", authentication, createCourse);
coursesRouter.get("/search/:term", coursesSearch);
coursesRouter.get("/:userId", (req, res) => {
  res.send("success");
});

module.exports = coursesRouter;
