const express = require("express");

const { createReview, getCourseReviews } = require("./../controllers/reviews");
const authentication = require("./../middlewares/authentication");

const reviewsRouter = express.Router();

reviewsRouter.post("/", authentication, createReview);
reviewsRouter.get("/:courseId", getCourseReviews);

module.exports = reviewsRouter;
