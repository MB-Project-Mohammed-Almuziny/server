const express = require("express");

const { createCourse } = require("./../controllers/courses");
const authentication = require("./../middlewares/authentication");

const coursesRouter = express.Router();

coursesRouter.get("/", (req, res) => {
  res.send("success");
});
coursesRouter.post("/", authentication, createCourse);

module.exports = coursesRouter;
