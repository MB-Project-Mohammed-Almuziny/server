const mongoose = require("mongoose");

const courses = new mongoose.Schema({
  title: { type: String, required: true },
  about: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: Users },
  category: { type: String, required: true },
  comments: { type: mongoose.Schema.Types.String, ref: Comments },
  reviews: { type: mongoose.Schema.Types.String, ref: reviews },
  questions: { type: mongoose.Schema.Types.String, ref: questions },
  isBocked: { type: Boolean, default: false },
});

module.exports = mongoose.model("Courses", courses);
