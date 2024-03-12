const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  status: {
    type: Boolean,
    default: true
  },

}, { timestamps: true });

const Category = mongoose.model("Category", CategorySchema);

module.exports = { CategorySchema, Category };
