const express = require("express");

const { createReview } = require("./../controllers/reviews");
const authentication = require("./../middlewares/authentication");

const reviewsRouter = express.Router();

reviewsRouter.post("/", authentication, createReview);

module.exports = reviewsRouter;
