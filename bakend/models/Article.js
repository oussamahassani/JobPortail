const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  slug: {
    type: String, required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'job must belong to a recruiter']
  },
  status: {
    type: Boolean,
    default: true
  },
}, { timestamps: true });

const Article = mongoose.model("Article", ArticleSchema);

module.exports = { ArticleSchema, Article };
