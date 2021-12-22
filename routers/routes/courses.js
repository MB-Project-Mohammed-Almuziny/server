const express = require("express");

const { createCourse } = require("./../controllers/courses");
const authentication = require("./../middlewares/authentication");

const coursesRouter = express.Router();

coursesRouter.post("/", authentication, createCourse);

module.exports = coursesRouter;
